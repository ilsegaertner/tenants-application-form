# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install a lightweight web server globally
RUN npm install -g serve

# Set the command to run the web server on port 80
CMD ["serve", "-s", "build", "-l", "80"]
