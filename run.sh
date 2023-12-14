#!/bin/bash
ls
sleep 1
npm install
chmod +x mongo_import.sh
chmod +x mongo.sh
sleep 3
#docker pull ubuntu
docker build --no-cache -t animevariant-server .

docker run -p 3031:3031 --name animevariant-server -itd animevariant-server:latest &
sleep 10
echo "one"
docker exec animevariant-server sed -i 's/\r//g' ./mongo.sh
sleep 3
echo "two"
docker exec animevariant-server sed -i 's/\r//g' ./mongo_import.sh
sleep 3
echo "three"
docker exec animevariant-server sed -i 's/\r//g' ./set_timezone.sh
sleep 3
docker exec animevariant-server bash ./mongo.sh