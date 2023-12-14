docker build --no-cache -t svelte-rich-text .
docker run --name svelte-rich-text -d -p 3000:3000 -v $(pwd):/code svelte-rich-text:latest 
docker exec svelte-rich-text /bin/bash

# make a brach on the main repo named the same as the monorepo
# add this as a subtree to the main repo
git subtree add --prefix=packages/svelte-rich-text https://github.com/valiantlynx/svelte-rich-text.git valiantlynx-turborepo --squash

# pull the subtree
git subtree pull --prefix=packages/svelte-rich-text https://github.com/valiantlynx/svelte-rich-text.git valiantlynx-turborepo --squash

# push the subtree
git subtree push --prefix=packages/svelte-rich-text https://github.com/valiantlynx/svelte-rich-text.git valiantlynx-turborepo