#!/bin/bash
ls
echo "starting mongo.sh"
sleep 3
apt-get update
cat /etc/os-release
uname -m
echo "current os"
sleep 10
apt-get update
apt-get install -y sudo wget
echo "update ubuntu"
sleep 3
echo "install gnup"
sudo apt-get -y install gnupg
sleep 3
echo "adding mongo key"
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
echo "installing mongodb"
sleep 3
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata
bash set_timezone.sh
sudo apt-get install -y mongodb-org
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
echo "making db folder"
sleep 3
mkdir -p /data/db
echo "running mongod"
mongod --fork --logpath /var/log/mongodb/mongod.log
sleep 3
echo "currently running processes"
ps aux | grep mongod
sleep 3
bash mongo_import.sh