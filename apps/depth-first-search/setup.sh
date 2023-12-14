docker build -t depth-first-search-image .
docker run --name depth-first-search-container -d -p 8000:8000 -v $(pwd):/code depth-first-search-image
