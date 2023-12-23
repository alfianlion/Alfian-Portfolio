# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build

# Expose port 80
EXPOSE 7000