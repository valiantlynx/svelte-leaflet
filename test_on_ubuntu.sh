#!/bin/bash
docker pull ubuntu
docker run -ti --rm ubuntu /bin/bash

docker run -p 3030:3030 --name animevariant -itd ubuntu:latest /bin/bash
docker exec animevariant /bin/bash
 
apt-get update
apt-get install -y nano