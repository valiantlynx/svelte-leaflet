import fetch from "node-fetch";
import fs from "fs";
import { execSync } from "child_process";
import { generateHash } from './hashGenerator.mjs';
import { chapterData, imageData } from './downloadWithCheerio.mjs';


//let downloadPosition = `//wsl.localhost/ubantu/home/valiantlynx/ic-projects/dbank/src/dbank_frontend/assets`;
let downloadPosition = `D:`;

const baseURL = "https://mangapark.net";

export async function downloadManga(data) {
    const hash = generateHash(`${baseURL}${data.src}`);
    console.log('hash createMangaRecord', hash, `${baseURL}${data.src}`);
    const id = hash
    try {
        // create the mangas folder if it does not exist
        if (!fs.existsSync(`${downloadPosition}/mangas`)) {
            console.log("No mangas folder found. Creating mangas folder...");
            fs.mkdirSync(`${downloadPosition}/mangas`, { recursive: true });
        }

        // create the manga folder if it does not exist
        if (!fs.existsSync(`${downloadPosition}/mangas/${id}`)) {
            console.log(`No manga folder found for ${id}. Creating manga folder...`);
            fs.mkdirSync(`${downloadPosition}/mangas/${id}`, { recursive: true });
        }

        // download the image and save it to the chapter folder as the manga profile image
        let fileName = `${downloadPosition}/mangas/${id}/profile.jpg`;

        // check if the file already exists
        if (fs.existsSync(fileName)) {
            // read the existing file and check if it's the same
            const existingFile = fs.readFileSync(fileName);
            const newFile = await fetch(data.img).then((res) => res.buffer());
            if (existingFile.equals(newFile)) {
                console.log(`Skipped ${fileName}`);
            } else {
                // add a number to the file name if it already exists but is not the same
                let i = 1;
                while (fs.existsSync(`${downloadPosition}/mangas/${id}/profile-${i}.jpg`)) {
                    i++;
                }
                fileName = `${downloadPosition}/mangas/${id}/profile-${i}.jpg`;
            }
        }

        // download the file and save it
        console.log(`Downloading ${fileName}`);
        const response = await fetch(new URL(data.img));
        const buffer = await response.buffer();
        fs.writeFileSync(fileName, buffer);
        console.log(`Downloaded ${fileName}`);

        // // Run the command after finishing the download
        // console.log("Running command: ls -a");
        // execSync("ls -a", { stdio: "inherit" });
    } catch (e) {
        console.log("download failed", e, e.message);
    }
}


export async function downloadChapter(chapter, manga, data) {
    const hash = generateHash(`${baseURL}${manga.src}`);
    console.log('hash createMangaRecord', hash, `${baseURL}${manga.src}`);
    const id = hash

    const chapterHash = generateHash(`${baseURL}${chapter.src}`);
    console.log('hash createMangaRecord', chapterHash, `${baseURL}${chapter.src}`);
    const chapterId = chapterHash

    // create the mangas folder if it does not exist and create the manga folder if it does not exist and create the chapter folder if it does not exist
    if (!fs.existsSync(`${downloadPosition}/mangas`)) {
        console.log("No mangas folder found. Creating mangas folder...");
        fs.mkdirSync(`${downloadPosition}/mangas`);
        console.log(`Created mangas folder. Creating manga folder...`);

    }
    if (!fs.existsSync(`${downloadPosition}/mangas/${id}`)) {
        console.log(`No manga folder found for ${id}. Creating manga folder...`);
        fs.mkdirSync(`${downloadPosition}/mangas/${id}`);
        console.log(`Created manga folder for ${id}. Creating chapter folder...`);

    }
    if (!fs.existsSync(`${downloadPosition}/mangas/${id}/${chapterId}`)) {
        console.log(`No chapter folder found for ${chapterId}. Creating chapter folder...`);
        fs.mkdirSync(`${downloadPosition}/mangas/${id}/${chapterId}`);

    }

    try {
        // loop through the data and download each image and save it to the chapter folder with the page number as the file name
        for (const image of data) {
            let fileName = `${downloadPosition}/mangas/${id}/${chapterId}/${image.pageNumber}.jpg`;

            // check if the file already exists
            if (fs.existsSync(fileName)) {
                // read the existing file and check if it's the same
                const existingFile = fs.readFileSync(fileName);
                const newFile = await fetch(image.imageUrl).then((res) => res.buffer());
                if (existingFile.equals(newFile)) {
                    console.log(`Skipped ${fileName}`);
                } else {
                    // add a number to the file name if it already exists but is not the same
                    let i = 1;
                    while (fs.existsSync(`${downloadPosition}/mangas/${id}/${chapterId}/${image.pageNumber}-${i}.jpg`)) {
                        i++;
                    }
                    fileName = `${downloadPosition}/mangas/${id}/${chapterId}/${image.pageNumber}-${i}.jpg`;
                }
            }
            // download the file and save it
            console.log(`Downloading ${fileName}`);
            const response = await fetch(new URL(image.imageUrl));
            const buffer = await response.buffer();
            fs.writeFileSync(fileName, buffer);
            console.log(`Downloaded ${fileName}`);
        }

    }
    catch (e) {
        console.log("download failed", e, e.message);
    }
}

export async function downloadCheerioChapter(chapter) {
    const hash = generateHash(`${chapter.mangaUrl}`);
    console.log('hash createMangaRecord', hash, `${chapter.mangaUrl}`);
    const id = hash

    const chapterHash = generateHash(`${baseURL}${chapter.src}`);
    console.log('hash createMangaRecord', chapterHash, `${baseURL}${chapter.src}`);
    const chapterId = chapterHash

    // create the mangas folder if it does not exist and create the manga folder if it does not exist and create the chapter folder if it does not exist
    if (!fs.existsSync(`${downloadPosition}/mangas`)) {
        console.log("No mangas folder found. Creating mangas folder...");
        fs.mkdirSync(`${downloadPosition}/mangas`);
        console.log(`Created mangas folder. Creating manga folder...`);

    }
    if (!fs.existsSync(`${downloadPosition}/mangas/${id}`)) {
        console.log(`No manga folder found for ${id}. Creating manga folder...`);
        fs.mkdirSync(`${downloadPosition}/mangas/${id}`);
        console.log(`Created manga folder for ${id}. Creating chapter folder...`);

    }
    if (!fs.existsSync(`${downloadPosition}/mangas/${id}/${chapterId}`)) {
        console.log(`No chapter folder found for ${chapterId}. Creating chapter folder...`);
        fs.mkdirSync(`${downloadPosition}/mangas/${id}/${chapterId}`);

    }

    try {
        const data = await imageData(chapter.id, chapter.titleid, chapter.chapterId);
        // loop through the data and download each image and save it to the chapter folder with the page number as the file name
        for (const image of data) {
            let fileName = `${downloadPosition}/mangas/${id}/${chapterId}/${image.pageNumber}.jpg`;

            // check if the file already exists
            if (fs.existsSync(fileName)) {
                // read the existing file and check if it's the same
                const existingFile = fs.readFileSync(fileName);
                const newFile = await fetch(image.imageUrl).then((res) => res.buffer());
                if (existingFile.equals(newFile)) {
                    console.log(`Skipped ${fileName}`);
                } else {
                    // add a number to the file name if it already exists but is not the same
                    let i = 1;
                    while (fs.existsSync(`${downloadPosition}/mangas/${id}/${chapterId}/${image.pageNumber}-${i}.jpg`)) {
                        i++;
                    }
                    fileName = `${downloadPosition}/mangas/${id}/${chapterId}/${image.pageNumber}-${i}.jpg`;
                }
            }
            
            // download the file and save it
            console.log(`Downloading ${fileName}`);
            const response = await fetch(new URL(image.imageUrl));
            const buffer = await response.buffer();
            fs.writeFileSync(fileName, buffer);
            console.log(`Downloaded ${fileName}`);
        }

    }
    catch (e) {
        console.log("download failed", e, e.message);
    }
}