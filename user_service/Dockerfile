# Use the official Node.js 14 image
FROM node:18 

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install -g nodemon
RUN npm install

# Copy all files from the current directory to the working directory inside the container
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm run build

# Command to run the app
CMD ["npm", "start"]