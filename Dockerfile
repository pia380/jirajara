FROM node:6.4.0-slim

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json /usr/src/app
RUN npm install

#bundle app source
COPY src /usr/src/app

EXPOSE 3000

CMD ["npm", "start"]
