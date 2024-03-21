#!/bin/bash

# Bring up the container in detached mode
docker-compose --file docker-compose.dev.yml up -d

# Get the container ID of the newly started container
CONTAINER_ID=$(docker-compose --file docker-compose.dev.yml ps -q svelte-leaflet-dev)

# Enter the container
docker exec -it $CONTAINER_ID /bin/bash
