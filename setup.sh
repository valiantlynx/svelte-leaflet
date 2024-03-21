docker build --no-cache -t svelte-leaflet .
docker run --name svelte-leaflet -d -p 3000:3000 -v $(pwd):/code svelte-leaflet:latest 
docker exec svelte-leaflet /bin/bash

# make a brach on the main repo named the same as the monorepo
# add this as a subtree to the main repo
git subtree add --prefix=packages/svelte-leaflet https://github.com/valiantlynx/svelte-leaflet.git valiantlynx-turborepo --squash

# pull the subtree
git subtree pull --prefix=packages/svelte-leaflet https://github.com/valiantlynx/svelte-leaflet.git main --squash

# push the subtree
git subtree push --prefix=packages/svelte-leaflet https://github.com/valiantlynx/svelte-leaflet.git main
