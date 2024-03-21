@echo off
REM Start the container in detached mode
docker-compose --file docker-compose.dev.yml up -d

REM Retrieve the container ID of the service named "dev-env"
FOR /f "tokens=*" %%i IN ('docker-compose --file docker-compose.dev.yml ps -q svelte-leaflet-dev') DO SET CONTAINER_ID=%%i

REM Enter the container
docker exec -it %CONTAINER_ID% /bin/bash

pause
