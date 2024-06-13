# Use a smaller base image
FROM node:alpine AS builder

# Create a directory for our application in the container 
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the entire project to the container
COPY . .

# Build the React app
RUN npm run build --production

# Use a minimal base image for serving the app
FROM node:alpine

# Set the working directory for the application
WORKDIR /usr/src/app

# Copy the build artifacts from the builder stage
COPY --from=builder /usr/src/app/build ./build

# Expose the port that your app will run on (usually 3000)  
EXPOSE 3000

# Command to run the application
CMD ["npx", "serve", "-s", "build"]
