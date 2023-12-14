# Anime Web Api with Express .

This api is based on [gogoanime](https://www18.gogoanime.io/)
An Anime Streaming web api to give you a better experience for your web app.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the Repository and run


```
npm install
node api
```

## Built With

- [Express](https://expressjs.com/)
- [Cheerio](https://cheerio.js.org/)


### adding new projects with their own git history
```sh
git subtree add --prefix=apps/anime-site-api https://github.com/valiantlynx/anime-site-api.git master --squash
git subtree pull --prefix=apps/anime-site-api https://github.com/valiantlynx/anime-site-api.git master --squash
git subtree push --prefix=apps/anime-site-api https://github.com/valiantlynx/anime-site-api.git master

```
