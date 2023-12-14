
import axios from 'axios';
import { create } from 'ipfs-http-client';
import { generateHash } from './hashGenerator.mjs';
import * as dotenv from 'dotenv';

dotenv.config();
const ipfs = create(process.env.IPFS_URL)

const hostURL = process.env.HOST_URL
const baseURL = "https://mangapark.net";
const ipfsURL = process.env.IPFS_URL
const pbURL = process.env.PB_URL

export async function storeMangasData(scrapedData) {
    console.log('Storing manga data');
    // Add IPFS storage logic here
    const ipfsFiles = [];
    const mangaData = [];

    for (const content of scrapedData) {
        const {
            img,
            title,
            tags,
            latestChapter,
            src,
            description,
            author,
            titleId,
            mangaParkId
        } = content;

        console.log('Fetching image', img);

        try {

            // Fetch the image data
            const imageResponse = await axios.get(img, {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'image/png',
                },
            });



            // Add the image data to IPFS
            const imageBuffer = Buffer.from(imageResponse.data);
            console.log('Adding image to IPFS');
            const ipfsFile = await ipfs.add(imageBuffer);

            // Pin the added image
            const pinned = await ipfs.pin.add(ipfsFile.cid);
            const pinList = await ipfs.pin.ls();

            let isPinned = false
            for await (const pin of pinList) {
                if (pin.cid.toString() === ipfsFile.cid.toString()) {
                    isPinned = true
                }
            }

            ipfsFiles.push(ipfsFile);

            // Store manga data with IPFS information
            const mangaInfo = {
                title,
                cid: ipfsFile.cid.toString(), // Store the CID as a string
                size: ipfsFile.size,
                img: `${hostURL}/ipfs/${ipfsFile.cid.toString()}`,
                isPinned,
                tags,
                latestChapter,
                src,
                description,
                author,
                titleId,
                mangaParkId
            };
            mangaData.push("mangaInfo", mangaInfo);

            console.log('Added image to IPFS', mangaInfo.img);

            // Add the image to IPFS MFS with the title as the filename
            const mfsPath = `/images/${titleId}/${titleId}.png`; // Customize the path and file extension as needed
            await ipfs.files.write(mfsPath, imageBuffer, { create: true, parents: true });
            console.log('Added image to IPFS MFS', mfsPath);

            // store manga data to database
            const mangaId = await createMangaRecord(mangaInfo);

        } catch (error) {
            console.log('Error fetching image:', error);
            // Handle the error or log an error message
        }
    }
    console.log('Finished storing manga data');
    return { ipfsFiles, mangaData };
}

async function createMangaRecord(data) {
    const hash = generateHash(`${baseURL}${data.src}`);
    console.log('hash createMangaRecord', hash, `${baseURL}${data.src}`);
    const id = hash

    try {
        const mangaData = {
            "id": id ? id : "",
            "title": data.title ? data.title : "",
            "titleId": data.titleId ? data.titleId : "",
            "img": data.img ? data.img : "",
            "tags": data.tags ? data.tags : [],
            "latestChapter": data.latestChapter ? data.latestChapter : 0,
            "src": data.src ? `${baseURL}${data.src}` : "",
            "description": data.description ? data.description : "",
            "author": data.author ? data.author : "",
            "imageCid": data.cid ? data.cid : "",
            "isPinned": data.isPinned ? data.isPinned : false,
            "mangaParkId": data.mangaParkId ? data.mangaParkId : ""
        };

        // Check if the record already exists
        const checkExistance = await axios.get(`${pbURL}/api/collections/manga/records?sort=&filter=title="${data.title}"`);

        // If data exists, return the existing record ID
        if (checkExistance.data.items.length > 0) {
            console.log(`Manga record with title "${data.title}" already exists with ID: ${checkExistance.data.items[0].id} and name: ${checkExistance.data.items[0].title}`);
            const response = await axios.patch(`${pbURL}/api/collections/manga/records/${checkExistance.data.items[0].id}`, mangaData);
            return checkExistance.data.items[0].id;
        }
        console.log("data.img", data.img);

        const response = await axios.post(`${pbURL}/api/collections/manga/records`, mangaData);

        console.log(`Manga record created with ID: ${response.data.id}`);
        return response.data.id;
    } catch (error) {
        console.error(`Error creating manga record: ${error}`);
    }
}

export async function storeMangaData(data) {
    console.log('Storing chapter data to IPFS');
    // Add IPFS storage logic here
    const ipfsFiles = [];
    const chapterData = [];

    for (const content of data) {

        const {
            src,
            chapterId,
            chapterTitle,
            titleid,
            id,
            mangaUrl,
            chapterNumber
        } = content;

        // Store chapter data with IPFS information
        const chapterInfo = {
            chapterId,
            src,
            chapterNumber,
            chapterTitle,
            titleid,
            id,
            mangaUrl
        };
        chapterData.push("chapterInfo", chapterInfo);

        try {
            // store chapter data to database
            await createChapterRecord(chapterInfo);

        } catch (error) {
            console.error('Error storing chapter data:', error);
            // Handle the error or log an error message
        }

    }
    console.log('Finished storing chapter data');
    return { ipfsFiles, chapterData };

}

async function createChapterRecord(data) {
    const hash = generateHash(data.mangaUrl);
    const src = `${baseURL}${data.src}`
    const id = generateHash(src);

    console.log("hash", hash); // Output: a 13-character hash based on the input data

    try {
        // Check if the record already exists
        const checkExistance = await axios.get(`${pbURL}/api/collections/chapters/records?sort=&filter=id="${id}"`);
        const chapterData = {
            id: id ? id : "",
            mangaId: hash ? hash : "",
            src: src ? src : "",
            title: data.chapterTitle ? data.chapterTitle : "",
            chapterId: data.chapterId ? data.chapterId : "",
            mangaUrl: data.mangaUrl ? data.mangaUrl : "",
            chapterNumber: data.chapterNumber ? data.chapterNumber : 1,
        };
        // If data exists, return the existing record ID
        if (checkExistance.data.items.length > 0) {
            console.log(`Chapter record with src "${src}" already exists with ID: ${checkExistance.data.items[0].id}`);
            const response = await axios.patch(`${pbURL}/api/collections/chapters/records/${checkExistance.data.items[0].id}`, chapterData);
            return checkExistance.data.items[0].id;
        }


        const response = await axios.post(`${pbURL}/api/collections/chapters/records`, chapterData);
        console.log(`Chapter record created with ID: ${response.data.id}`);
        return response.data.id;
    } catch (error) {
        console.error(`Error creating chapter record: ${error}`);
    }
}

export async function storeImagesData(data) {
    console.log('Storing images data to IPFS');
    // Add IPFS storage logic here
    const ipfsFiles = [];
    const imagesData = [];

    const {
        chapterid,
        titleid,
        id,
        chapterUrl,
        images,
    } = data


    for (const content of images) {
        const {
            imageUrl,
            pageNumber,
            totalPages,
            chapterText,
        } = content;

        console.log('Fetching image', imageUrl);

        try {
            // Fetch the image data
            const imageResponse = await axios.get(imageUrl, {
                responseType: 'arraybuffer',
            });

            // Add the image data to IPFS
            const imageBuffer = Buffer.from(imageResponse.data);
            const ipfsFile = await ipfs.add(imageBuffer);

            // Pin the added image
            const pinned = await ipfs.pin.add(ipfsFile.cid);
            const pinList = await ipfs.pin.ls();

            let isPinned = false
            for await (const pin of pinList) {
                if (pin.cid.toString() === ipfsFile.cid.toString()) {
                    isPinned = true
                }
            }

            ipfsFiles.push(ipfsFile);

            // Store chapter data with IPFS information
            const imagesInfo = {
                cid: ipfsFile.cid.toString(), // Store the CID as a string
                size: ipfsFile.size,
                img: `${hostURL}/ipfs/${ipfsFile.cid.toString()}`,
                isPinned,
                imageUrl,
                pageNumber,
                totalPages,
                chapterText,
                id,
                titleid,
                chapterid,
                chapterUrl
            };
            imagesData.push("imagesInfo", imagesInfo);

            console.log('Added image to IPFS', imagesInfo.imageUrl);

            // Add the image to IPFS MFS with the title as the filename
            const mfsPath = `/images/${titleid}/${chapterid}/${pageNumber}.png`; // Customize the path and file extension as needed
            await ipfs.files.write(mfsPath, imageBuffer, { create: true, parents: true });
            console.log('Added image to IPFS MFS', mfsPath);


            // store chapter data to database
            await createImagesRecord(imagesInfo);
        } catch (error) {
            console.error('Error fetching image:', error);
            // Handle the error or log an error message
        }


    }
    console.log('Finished storing images data');
    return { ipfsFiles, imagesData };
}

async function createImagesRecord(data) {
    const chapteridHash = generateHash(`${baseURL}/comic/${data.id}/${data.titleid}/${data.chapterid}`);
    const titleidHash = generateHash(`${baseURL}/comic/${data.id}/${data.titleid}`);
    const id = generateHash(data.imageUrl);

    console.log(
        "src", id,
        `${baseURL}/comic/${data.id}/${data.titleid}/${data.chapterid}`,
        chapteridHash,
        `${baseURL}/comic/${data.id}/${data.titleid}`
    );

    try {
        // Check if the record already exists
        const checkExistance = await axios.get(`${pbURL}/api/collections/images/records?sort=&filter=id="${id}"`);
        const imagesData = {
            id: id ? id : "",
            imageUrl: data.imageUrl ? data.imageUrl : "",
            chapterText: data.chapterText ? data.chapterText : "",
            totalPages: data.totalPages ? data.totalPages : 0,
            pageNumber: data.pageNumber ? data.pageNumber : 0,
            chapterId: chapteridHash ? chapteridHash : "",
            chapter: data.chapterid ? data.chapterid : "",
            titleId: titleidHash ? titleidHash : "",
            chapterUrl: data.chapterUrl ? data.chapterUrl : "",
            cid: data.cid ? data.cid : "",
            size: data.size ? data.size : 0,
            isPinned: data.isPinned ? data.isPinned : false,
            img: data.img ? data.img : "",
        };
        // If data exists, return the existing record ID
        if (checkExistance.data.items.length > 0) {
            console.log(`Images record with src "${data.imageUrl}" already exists with ID: ${checkExistance.data.items[0].id}`);
            const response = await axios.patch(`${pbURL}/api/collections/images/records/${checkExistance.data.items[0].id}`, imagesData);
            return checkExistance.data.items[0].id;
        }

        const response = await axios.post(`${pbURL}/api/collections/images/records`, imagesData);
        console.log(`Images record created with ID: ${response.data.id}`);
        return response.data.id;
    } catch (error) {
        console.error(`Error creating images record: ${error}`);
    }
}