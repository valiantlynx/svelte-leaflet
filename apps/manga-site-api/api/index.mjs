// this uses puppeteer to scrape the website, the problem is that puppeter needs chromium to be installed to run.
// turn imports into module imports
import { url } from './setupPocketbase.mjs';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import axios from 'axios';
import cheerio from 'cheerio';
import { create } from 'ipfs-http-client';
import { storeMangasData, storeMangaData, storeImagesData } from './storeData.mjs';
import { downloadManga, downloadCheerioChapter } from './downloadData.mjs';
import { setupPuppeteer } from './puppeteer.mjs';

dotenv.config();
const ipfs = create(process.env.IPFS_URL)
const app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const hostURL = process.env.HOST_URL

app.use(cors());

const baseURL = "https://mangapark.net/";

app.get('/', async (req, res) => {
    res.send("hello!");
});

app.get('/test', async (req, res) => {
    const page = req.query.page || 1;

    const resultList = await axios.get(`${url}/api/collections/manga/records?page=${page}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error("error: ", error.message);
        });
    // send pocketbase data
    res.send(resultList);
});

app.get('/ipfs/:cid', async (req, res) => {
    console.log("requesting cid: ");
    const cid = req.params.cid;
    console.log("recived cid: ", cid, " from: ", req.ip);
    try {
        const chunks = [];
        var chunkNo = 0;
        console.log("getting cid: ", cid);
        for await (const chunk of ipfs.cat(cid)) {
            console.log("chunk: ", chunkNo++);
            chunks.push(chunk);
        }
        const data = Buffer.concat(chunks);

        console.log('IPFS data retrieved successfully');

        // Set the appropriate content type for the image
        res.set('Content-Type', 'image/png');

        console.log('Sending IPFS data as response');

        // Process the data or send it as a response
        res.send(data);
        console.log('IPFS data sent successfully');
    } catch (error) {
        console.error('Error retrieving IPFS data:', error);
        res.json({
            error: error.message,
            failure: error
        });
    }
});

app.get('/api/browse/:page', async (req, res) => {
    let pageNo = req.params.page;
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

        storeMangasData(scrapedData);

  
        scrapedData.forEach(async (data) => {
            downloadManga(data);
        });

        res.json({
            page: pageNo,
            mangas: scrapedData,
        });

      

    } catch (error) {
        console.error('Scraping failed', error.message);
        res.status(500).json({
            error: error.message,
            failure: error
        });
    }
});

app.get('/api/manga/:id/:titleid', async (req, res) => {
    let id = req.params.id;
    let titleid = req.params.titleid;

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

        storeMangaData(data);
        
        for (const chapter of data) {
            downloadCheerioChapter(chapter);
        }

        res.json({ episodes: data });

     

    } catch (error) {
        console.error('Scraping failed', error.message);
        res.status(500).json({
            error: error.message,
            failure: error
        });
    }
});

app.get('/api/manga/:id/:titleid/:chapterid', async (req, res) => {
    let id = req.params.id;
    const titleid = req.params.titleid;
    let chapterid = req.params.chapterid;
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

        storeImagesData({
            chapterid,
            titleid,
            id,
            chapterUrl,
            images: data,
        });

        res.json({
            chapterid,
            titleid,
            id,
            chapterUrl,
            images: data,
        });
    } catch (error) {
        console.error('Scraping failed', error);
        res.status(500).json({
            error: error.message,
            failure: error
        });
    }
});


app.get("/api/home", (req, res) => {
    let info = {
        browse: { recipe: `${hostURL}/api/browse/:page`, test: `${hostURL}/api/browse/2` },
        manga: { recipe: `${hostURL}/api/manga/:id/:titleid`, test: `${hostURL}/api/manga/75577/solo-leveling` },
        mangaChapter: { recipe: `${hostURL}/api/manga/:id/:titleid/:chapterid`, test: `${hostURL}/api/manga/75577/solo-leveling/c197` },
        docs: { recipe: `${hostURL}/api/docs`, test: `${hostURL}/api/docs` }
    };
    res.send(info);
});

app.get("/api/docs", (req, res) => {
    const welcomeMessage = "Welcome to AnimeVariant API!";
    const apiInfo = {
        version: "1.0.0",
        author: "Valiantlynx",
        description: "An API for accessing anime information and resources.",
        endpoints: [
            {
                path: "/api/home",
                description: "Get information about available API endpoints. They are also listed here.",
                params: {}
            },
            {
                path: "/api/browse/:page",
                description: "Get a list of manga titles. The page parameter is optional and defaults to 1.",
                params: {
                    page: "The page number to get manga titles from."
                }
            },
            {
                path: "/api/manga/:id/:titleid",
                description: "Get a list of chapters for a manga title.",
                params: {
                    id: "The ID of the manga title.",
                    titleid: "The title ID of the manga title."
                }
            },
            {
                path: "/api/manga/:id/:titleid/:chapterid",
                description: "Get a list of images for a manga chapter.",
                params: {
                    id: "The ID of the manga title.",
                    titleid: "The title ID of the manga title.",
                    chapterid: "The chapter ID of the manga chapter."
                }
            },
        ],
    };

    const response = {
        message: welcomeMessage,
        api: apiInfo,
    };

    res.send(response);
});

// word is any word, page is an integer
app.get("/api/search/:word/:page/:action", async (req, res) => {
    let results = [];
    var word = req.params.word;
    let page = req.params.page;
    let action = req.params.action;

    if (isNaN(page)) {
        return res.status(404).json({ results });
    }

    console.log("searching for: ", word, " on page: ", page);

    let url = `${baseURL}search?word=${word}&page=${req.params.page}`;
    console.log("url: ", url);

    try {
        const { data: html } = await axios.get(url);

        const $ = cheerio.load(html);

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

        // check if "see" or to "populate". if see, do nothing just continue, if populate, run storeMangasData(scrapedData);
        if (action === "populate") {
            storeMangasData(scrapedData);
        }
        
        res.json({
            page,
            mangas: scrapedData,
        });
    } catch (error) {
        console.error('Scraping failed', error);
        res.status(500).json({
            error: error.message,
            failure: error
        });
    }
});


app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`);
});