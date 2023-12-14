#!/bin/bash
uname -m
sleep 6
apt-get install -y curl

curl 'https://data.brreg.no/enhetsregisteret/api/enheter/lastned' -X GET  -H 'Accept: application/vnd.brreg.enhetsregisteret.enhet.v1+gzip;charset=UTF-8' -J -O

gzip -d enheter_alle.json.gz
echo "unziped"
sleep 3

sudo apt-get update && sudo apt-get -y upgrade

curl -O https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2004-x86_64-100.6.1.deb

mongoimport --db animevariantDB --collection manga --file enheter_alle.json --jsonArray --numInsertionWorkers 4
