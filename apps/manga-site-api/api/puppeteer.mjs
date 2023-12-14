import puppeteer from 'puppeteer';
import * as dotenv from 'dotenv';

dotenv.config();

const hostURL = process.env.HOST_URL
const browserlessURL = process.env.BROWSERLESS_URL;

export async function setupPuppeteer() {
    // const endpoint = browserlessURL;

    // const browser = await puppeteer.connect({
    //     browserWSEndpoint: endpoint,
    // });

    const browser = await puppeteer.launch({
        headless: "new",
        args: [
            '--no-sandbox',
        ]
    });
    return browser;
}