# ./apiServer/Dockerfile
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Install nodemon globally
RUN npm install -g nodemon

# Copy all files
COPY . .

# Expose the application port
EXPOSE 8000

# Command to start the server with nodemon
CMD ["nodemon", "server.js"]
