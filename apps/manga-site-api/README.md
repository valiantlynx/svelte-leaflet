# manga scraper that can download manga and can save it in a database(pocketbase)
you have to set a simple pocketbase on port 8080. make sure to make three collections named manga, chapters, and images

this is their structure:
```javascript
manga:
{
    "id": "string",
    "title":  "string",
    "img":  "url",
   
    "tags": " string",
    "latestChapter":  "number",
    "src":  "url",
    "description": "string",
    "author": "string",
}

chapters:
{
    mangaId:  "relation",
    src:  "url",
    title: "string",
}

images:
{
    pageNumber: "number",
    img: "url",
    chapterId:"relation",
    totalPages: "number",
    chapterText:  "string",
   
}
```

# How to use
1. clone the repo
2. run `npm install`
3. run `npm start`

# How to use the api
1. go to `localhost:8080/_/` the api is pocketbases api so you can use it like that

   ### adding new projects with their own git history
```sh
git subtree add --prefix=apps/manga-site-api https://github.com/valiantlynx/manga-site-api.git master --squash
git subtree pull --prefix=apps/manga-site-api https://github.com/valiantlynx/manga-site-api.git master --squash
git subtree push --prefix=apps/manga-site-api https://github.com/valiantlynx/manga-site-api.git master
```
