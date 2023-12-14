docker build --no-cache -t pocketbase-upload-maga .
docker run -p 3000:3000 --name pocketbase-upload-maga -itd pocketbase-upload-maga:latest &