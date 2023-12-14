#!/bin/bash
ls
sleep 1
sudo docker ps
sudo docker stop animevariant-server
sudo docker system prune -a
cd ..
sudo rm -rf animevariant-server/
ls
sleep 5
sudo git clone https://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@github.com/valiantlynx/animevariant-server.git
cd animevariant-server/
ls
sleep 3
sudo bash run.sh
