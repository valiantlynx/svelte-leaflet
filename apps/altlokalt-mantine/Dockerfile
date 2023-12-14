FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
RUN npm install -g nodemon@latest
EXPOSE 3000
CMD ["nodemon", "-p", "3000"]
