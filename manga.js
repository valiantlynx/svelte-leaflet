
// const axios = require('axios');
// const cheerio = require('cheerio');
// const fs = require('fs');

// const baseUrl = 'https://fanfox.net/manga';
// const title = 'star_martial_god_technique';
// const chapter = 'c605';
//   // Create folders if they don't exist
// fs.mkdirSync('manga', { recursive: true });
// fs.mkdirSync(`manga/${title}`, { recursive: true });
// fs.mkdirSync(`manga/${title}/${chapter}`, { recursive: true });
//   // Make request to chapter page
// axios.get(`${baseUrl}/${title}/${chapter}/1.html`)
// .then(response => {
//   // Load HTML into cheerio
//   const $ = cheerio.load(response.data);
//   // Get all image links
//   const images = $('img[src*="/manga/"]').toArray().map(img => $(img).attr('src'));
//   // Download each image
//   images.forEach((image, i) => {
//     axios({
//       url: image,
//       method: 'GET',
//       responseType: 'stream'
//     }).then(response => {
//       response.data.pipe(fs.createWriteStream(`manga/${title}/${chapter}/${i + 1}.jpg`));
//     });
//   });
// });

const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeMangaChapterImages(chapterUrl) {
  const html = await axios.get(chapterUrl);
  const $ = cheerio.load(html.data);
  const imageDatas = [];

  // Find all the image elements on the page and extract their base64-encoded data
  $('img').each((index, element) => {
    const imageUrl = $(element).attr('src');
    console.log("imageUrl", imageUrl);
    if (imageUrl && imageUrl.startsWith('data:image/')) {
      const imageData = imageUrl.replace(/^data:image\/\w+;base64,/, '');
      imageDatas.push(imageData);
    }
  });

  return imageDatas;
}

// Example usage: Scrape the base64-encoded image data for Chapter 605 of the Star Martial God Technique manga
const chapterUrl = 'https://fanfox.net/manga/star_martial_god_technique/c605';
scrapeMangaChapterImages(chapterUrl).then((imageDatas) => {
  console.log(imageDatas);
});
