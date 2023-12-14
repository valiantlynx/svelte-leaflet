import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { downloadManga, downloadChapter } from './downloadData.mjs';
import { setupPuppeteer } from './puppeteer.mjs';


dotenv.config();
const app = express();

const baseURL = "https://mangapark.net/";

app.use(cors());

async function run() {
    let browser;
    const pageNumber = 1;

    // max pages you can get from https://mangapark.net/browse is 2570
    const maxPages = 13;

    // loop through the pages and get the manga list from each page starting from page pageNumber to the last page, the last page is unknown
    for (let i = pageNumber; i <= maxPages; i++) {

        console.log("currently on page", i);

        // test url 
        //const url = `https://bot.sannysoft.com/`;
        const url = `https://mangapark.net/browse?page=${i}`;
        console.log("url", url);
        try {

            browser = await setupPuppeteer()

            // 'false' makes the browser visible and it does not look like a robot, 
            // 'true' makes the browser invisible and it looks like a robot
            // 'new' makes the browser invisible and it does not look like a robot,
            // browser = await puppeteer.launch({ headless: 'new' });

            const page = await browser.newPage();
            await page.setDefaultNavigationTimeout(2 * 60 * 1000);

            // go to the url and get the manga list
            await page.goto(url);
            await page.screenshot({ path: "screenshot.png" });

            await page.waitForSelector("#subject-list");



            const mangas = Array.from(await page.$$(".pb-3"));
            const data = await Promise.all(
                mangas.map(async (manga) => {
                    const content = await manga.evaluate((e) => {
                        const titleElement = e.querySelector('.fw-bold')
                        const imgElement = e.querySelector('img')
                        const tagsElement = e.querySelector('.genres')
                        const chaptersElement = e.querySelector('.text-ellipsis-1')
                        const srcElement = e.querySelector('a')
                        const descriptionElement = e.querySelector('.limit-html')
                        const authorElement = e.querySelector('.autarts')

                        return {
                            title: titleElement ? titleElement.innerText : null,
                            img: imgElement ? imgElement.getAttribute('src') : null,
                            tags: tagsElement ? tagsElement.innerText : null,
                            latestChapter: chaptersElement ? chaptersElement.innerText : null,
                            src: srcElement ? srcElement.href : null,
                            description: descriptionElement ? descriptionElement.innerText : null,
                            author: authorElement ? [authorElement.innerText, authorElement.querySelector('a').href] : null, // [name, link] might use the link later to get more info
                        };
                    });

                    return content;
                })
            );

            console.log("data new", JSON.stringify(data[0], null, 2));

            let mangaData = {}

            const delay = (ms) => new Promise((res) => setTimeout(res, ms));


            // go to each manga page and get the image
            for (const manga of data) {
                console.log("Navigating to: ", manga.src);
                await page.goto(manga.src);
                await delay(100);

                const elements = Array.from(await page.$$(".episode-item"));
                const data = await Promise.all(
                    elements.map(async (chapterBody) => {
                        const content = await chapterBody.evaluate((e) => {
                            const srcElement = e.querySelector('a')

                            return {
                                src: srcElement ? srcElement.href : null,
                                chapterTitle: srcElement ? srcElement.innerText : null,
                            };
                        });
                        return content;
                    })
                );

                // // download the manga profile image
                // console.log("Downloading manga profile image...");
                await downloadManga(manga)

                // go to each chapter page and get the images
                for (const chapter of data) {
                    console.log("Navigating to: ", chapter.src);
                    await page.goto(chapter.src);
                    await delay(100);

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

                    // // download the images
                    // console.log("Downloading chapter images...");
                    await downloadChapter(chapter, manga, data)

                    mangaData = {
                        ...manga,
                        chapters: data
                    }

                    // console.log("mangaData", mangaData);
                }
            }





            await page.close();

        } catch (e) {
            console.log("scrape failed", e);
        } finally {
            await browser?.close();
        }



        console.log("Finished scraping page", i, "of", 2553);
    }




}

run();
