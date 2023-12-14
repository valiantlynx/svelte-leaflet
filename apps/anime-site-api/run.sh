docker build --no-cache -t animevariant_com_api .
docker run -p 3000:3000 --name animevariant_com_api -itd animevariant_com_api:latest &