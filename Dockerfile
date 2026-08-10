# Base Image
FROM node:22-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project
COPY . .

# Expose application port
EXPOSE 8000

# Start application
CMD ["npm", "start"]
