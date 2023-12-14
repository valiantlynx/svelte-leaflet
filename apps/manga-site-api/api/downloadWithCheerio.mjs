import { url } from './setupPocketbase.mjs';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import axios from 'axios';
import cheerio from 'cheerio';
import { downloadManga, downloadCheerioChapter } from './downloadData.mjs';
import { setupPuppeteer } from './puppeteer.mjs';

dotenv.config();
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const hostURL = process.env.HOST_URL

app.use(cors());

const baseURL = "https://mangapark.net/";

async function browsePage(pageNo) {
    try {
        console.log('currently on page', pageNo);
        const url = `${baseURL}browse?page=${pageNo}`;
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
                'Referer': 'https://mangapark.net/',
            },
        }).catch((err) => {
            console.log("error: ", err.message);
        });
        const $ = cheerio.load(response.data);

        const scrapedData = [];

        $('.pb-3').each((index, element) => {
            const titleElement = $(element).find('.fw-bold');
            const imgElement = $(element).find('img');
            const tagsElement = $(element).find('.genres');
            const chaptersElement = $(element).find('.text-ellipsis-1');
            const srcElement = $(element).find('a');
            const descriptionElement = $(element).find('.limit-html');
            const authorElement = $(element).find('.autarts');

            // Extract the ID and title ID from the src URL
            const src = srcElement.attr('href');
            const id = src ? src.split('/').slice(-2, -1)[0] : null;
            const titleId = src ? src.split('/').slice(-1)[0] : null;

            const content = {
                title: titleElement.text().trim(),
                img: imgElement.attr('src'),
                tags: tagsElement.text(),
                latestChapter: chaptersElement.text(),
                src,
                mangaParkId: id,
                titleId,
                description: descriptionElement.text(),
                author: authorElement.length
                    ? [authorElement.text(), authorElement.find('a').attr('href')]
                    : null,
            };

            scrapedData.push(content);
        });

        scrapedData.forEach(async (data) => {
            await downloadManga(data);
        });

    } catch (error) {
        console.error('Scraping failed - downloadWithCheerio', error.message);

    }
}

export async function chapterData(id, titleid) {
    try {
        const url = `${baseURL}comic/${id}/${titleid}`;

        console.log("Navigating to: ", url);

        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36',
                'Referer': 'https://mangapark.net/',
            },

        });
        const $ = cheerio.load(response.data);

        const elements = $('.episode-item');
        const data = elements.map((index, element) => {
            const srcElement = $(element).find('a');

            // Extract the chapter ID from the src URL
            const src = srcElement.attr('href');
            const chapterId = src ? src.split('/').slice(-1)[0] : null;
            const chapterNumber = chapterId ? parseFloat(chapterId.match(/\d+(\.\d+)?/)[0]) : null;

            return {
                src,
                chapterId,
                chapterNumber,
                chapterTitle: srcElement.text(),
                titleid,
                id,
                mangaUrl: url
            };
        }).get();
  
        for (const chapter of data) {
            await downloadCheerioChapter(chapter);
        }

    } catch (error) {
        console.error('Scraping failed -chapterData', error.message);
    }
}

export async function imageData(id, titleid, chapterid) {
    console.log("recieved dta:", id, titleid, chapterid);
    try {
        const chapterUrl = `${baseURL}comic/${id}/${titleid}/${chapterid}`;

        console.log("Navigating to: ", chapterUrl);

        const browser = await setupPuppeteer()
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(2 * 60 * 1000);

        await page.goto(chapterUrl);

        await page.click('.ms-1')

        const elements = Array.from(await page.$$("#viewer .item"));
        const data = await Promise.all(
            elements.map(async (imageBody) => {
                const content = await imageBody.evaluate((e) => {
                    const imgElement = e.querySelector('img');
                    const pageElement = e.querySelector('.page-num');

                    const imageUrl = imgElement ? imgElement.src : null;
                    const chapterText = pageElement ? pageElement.innerText : null;
                    const pageNumber = pageElement ? Number(pageElement.innerText.split(' / ')[0]) : null;
                    const totalPages = pageElement ? Number(pageElement.innerText.split(' / ')[1]) : null;

                    return {
                        imageUrl,
                        pageNumber,
                        totalPages,
                        chapterText,
                    };
                });
                return content;
            })
        );

        await browser.close();

    

        // storeImagesData({
        //     chapterid,
        //     titleid,
        //     id,
        //     chapterUrl,
        //     images: data,
        // });

        return data;

    } catch (error) {
        console.error('Scraping failed -imageData', error);
    }
}

browsePage(4)