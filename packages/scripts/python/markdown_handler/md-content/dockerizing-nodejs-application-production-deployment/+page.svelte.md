---
title: Dockerizing a Node.js Application for Production Deployment
created: 2023-02-22
tags: ['Docker', 'Node.js', 'Production Deployment']
image: '/dockerizing-nodejs-application-production-deployment/image.png'
alt: 'Dockerizing a Node.js Application for Production Deployment'
summary: Dockerizing a Node.js application is a crucial step in the process of deploying a web application to production. The Docker image created by the Dockerfile contains everything your application needs to run in a production environment, making it easier to deploy and manage.
---

## Headings

---

Dockerizing a Node.js application is a crucial step in the process of deploying a web application to production. The Docker image created by the Dockerfile contains everything your application needs to run in a production environment, making it easier to deploy and manage.

In this blog post, we'll go over how to create a Dockerfile that installs a production-ready build of your Node.js application and serves it with the Serve package. We'll start by creating a basic Dockerfile that installs the necessary dependencies and runs the build command to generate the production build. Then, we'll look at how to optimize the Docker image for space by removing any unnecessary files and dependencies.

Here's the basic Dockerfile we'll start with:

```Dockerfile
FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm run build -- --source-folder source --public-folder public
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
```

This Dockerfile first copies the **package.json** and **package-lock.json** files to the **app** directory, installs the dependencies, runs the build command to generate the production build, then installs the Serve package and runs the serve command on the build directory, thus exposing it on port 3000.

However, this Dockerfile can be optimized for space by removing any unnecessary files and dependencies. We can delete the source code and public assets that are not needed for the production build, as well as remove the development dependencies.

Here's an updated version of the Dockerfile that removes the unnecessary files and dependencies:

```Dockerfile
FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm run build -- --source-folder source --public-folder public
RUN rm -rf /app/source /app/public /app/node_modules
RUN npm prune --production
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]

```

This Dockerfile first copies the **package.json** and **package-lock.json** files to the **app** directory, installs the dependencies, runs the build command to generate the production build, then it uses the **rm -rf** command to recursively delete the **source**, **public**, and **node_modules** folders, removes the unnecessary development dependencies, installs the Serve package, and runs the serve command on the build directory, thus exposing it on port 3000.

In conclusion, Dockerizing a Node.js application is a crucial step in deploying a web application to production. By creating a Dockerfile that installs a production-ready build of your application and serving it with the Serve package, you can easily deploy and manage your application in a production environment. Additionally, by optimizing the Docker image for space, you can save on storage.

[scrollToTop](#headings)
