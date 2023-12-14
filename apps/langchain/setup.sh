docker build --no-cache -t langchain-main .
docker run --name langchain-main -d -p 8000:8000 -v $(pwd):/code langchain-main:latest 
docker exec langchain-main /bin/bash

# make a brach on the main repo named the same as the monorepo
# add this as a subtree to the main repo
git subtree add --prefix=apps/langchain https://github.com/valiantlynx/langchain.git valiantlynx-turborepo --squash

# pull the subtree
git subtree pull --prefix=apps/langchain https://github.com/valiantlynx/langchain.git valiantlynx-turborepo --squash

# push the subtree
git subtree push --prefix=apps/langchain https://github.com/valiantlynx/langchain.git valiantlynx-turborepo
