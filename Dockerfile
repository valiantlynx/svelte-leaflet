FROM ubuntu
# Copy the application files to the container
WORKDIR /root/
COPY . /root/
# Install Node.js and NPM
RUN apt update && apt install -y nodejs npm
# Install the required packages and global packages
RUN npm install
RUN npm install -g nodemon
# Expose the required port for the Node.js application
EXPOSE 3031
# Start MongoDB and the Node.js application
CMD ["nodemon"]