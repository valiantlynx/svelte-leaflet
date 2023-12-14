// this uses puppeteer to scrape the website, the problem is that puppeter needs chromium to be installed to run.
require('dotenv').config();
const app = require("express")();
const cors = require("cors");
const puppeteer = require("puppeteer");

const port = process.env.PORT || 3000;
const hostURL = process.env.HOST_URL

app.use(cors());

const baseURL = "https://mangapark.net/";

app.get('/api/browse/:page', async (req, res) => {
    let pageNo = req.params.page;
    try {
        // Create an array to store the scraped data
        const scrapedData = [];

        console.log('currently on page', pageNo);

        url = `${baseURL}browse?page=${pageNo}`;

        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(2 * 60 * 1000);

        await page.goto(url);
        await page.waitForSelector('#subject-list');

        const mangas = await page.$$('.pb-3');

        for (const manga of mangas) {
            const content = await manga.evaluate((e) => {
                const titleElement = e.querySelector('.fw-bold');
                const imgElement = e.querySelector('img');
                const tagsElement = e.querySelector('.genres');
                const chaptersElement = e.querySelector('.text-ellipsis-1');
                const srcElement = e.querySelector('a');
                const descriptionElement = e.querySelector('.limit-html');
                const authorElement = e.querySelector('.autarts');

                // Extract the ID and title ID from the src URL
                const src = srcElement ? srcElement.href : null;
                const id = src ? src.split('/').slice(-2, -1)[0] : null;
                const titleId = src ? src.split('/').slice(-1)[0] : null;


                return {
                    title: titleElement ? titleElement.innerText : null,
                    img: imgElement ? imgElement.getAttribute('src') : null,
                    tags: tagsElement ? tagsElement.innerText : null,
                    latestChapter: chaptersElement ? chaptersElement.innerText : null,
                    src,
                    id,
                    titleId,
                    description: descriptionElement ? descriptionElement.innerText : null,
                    author: authorElement
                        ? [authorElement.innerText, authorElement.querySelector('a').href]
                        : null,
                };
            });
            scrapedData.push(content);
        }
        await browser.close();

        res.json({ 
            page: pageNo,

            mangas: scrapedData
         });
    } catch (error) {
        console.error('Scraping failed', error);
        res.status(500).send('Scraping failed');
    }
});

app.get('/api/manga/:id/:titleid', async (req, res) => {
    let id = req.params.id;
    let titleid = req.params.titleid;
    try {
        url = `${baseURL}comic/${id}/${titleid}`;

        console.log("Navigating to: ", url);

        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(2 * 60 * 1000);

        await page.goto(url);


        const elements = Array.from(await page.$$(".episode-item"));
        const data = await Promise.all(
            elements.map(async (chapterBody) => {
                const content = await chapterBody.evaluate((e) => {
                    const srcElement = e.querySelector('a')

                    // Extract the chapter ID from the src URL
                    const src = srcElement ? srcElement.href : null;
                    const chapterId = src ? src.split('/').slice(-1)[0].split('-')[0] : null;


                    return {
                        src,
                        chapterId,
                        chapterTitle: srcElement ? srcElement.innerText : null,
                    };
                });
                return content;
            })
        );

        await browser.close();

        res.json({ episodes: data });
    } catch (error) {
        console.error('Scraping failed', error);
        res.status(500).send('Scraping failed');
    }
});

app.get('/api/manga/:id/:titleid/:chapterid', async (req, res) => {
    let id = req.params.id;
    let titleid = req.params.titleid;
    let chapterid = req.params.chapterid;
    console.log("recieved dta:",id, titleid, chapterid);
    try {
        url = `${baseURL}comic/${id}/${titleid}/${chapterid}`;

        console.log("Navigating to: ", url);
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(2 * 60 * 1000);


        await page.goto(url);

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

        res.json({ images: data });
    } catch (error) {
        console.error('Scraping failed', error);
        res.status(500).send('Scraping failed');
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


app.listen(port, () => console.log(`running on ${port}`));

module.exports = app;
