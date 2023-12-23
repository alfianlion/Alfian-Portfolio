FROM node:lts-alpine
ENV NODE_ENV=production
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 7000
CMD ["npm", "start"]
