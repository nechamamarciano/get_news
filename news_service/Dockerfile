# Use the official Node.js 14 image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory inside the container
COPY tsconfig.json ./
COPY src ./src

# Build TypeScript
RUN npm install -g typescript ts-node nodemon
RUN npm run build

# Command to run the app
CMD ["npx", "nodemon", "--exec", "ts-node", "src/app.ts"]
