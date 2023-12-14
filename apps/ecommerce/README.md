# ecommerce

# admin 
is where you add products and all that.

## how to use
the environment variables are in next.config.js, edit them to your use case

then 
```
npm i
npm run dev
```
it will start on localhost:3000

# frontend
is where you add products and all that.

## how to use
the environment variables are in next.config.js, edit them to your use case

then
```
npm i
npm run dev
```
it will start on localhost:3000


### adding new projects with their own git history
```sh
git subtree add --prefix=apps/ecommerce https://github.com/valiantlynx/ecommerce.git master --squash
git subtree pull --prefix=apps/ecommerce https://github.com/valiantlynx/ecommerce.git master --squash
git subtree push --prefix=apps/ecommerce https://github.com/valiantlynx/ecommerce.git master

```
