FROM ubuntu:latest

# Install necessary dependencies
RUN apt-get update && \
    apt-get install -y curl chromium-browser && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

# Set environment variables
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV CHROME_BIN=/usr/bin/chromium-browser

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install global dependencies
RUN npm install -g npm@latest
RUN npm install -g nodemon@latest

# Install dependencies
RUN npm install

# Copy application files
COPY ./ ./

# Expose the desired port
EXPOSE 3000

# Start the application in the background
CMD ["npm", "start"]
