FROM node:6.4.0-slim

#Create app directory
RUN mkdir -p /usr/src
WORKDIR /usr/app

#Install app dependencies
COPY package.json /usr/app
RUN npm install

#bundle app source
COPY src /usr/app/src

EXPOSE 3000

CMD ["npm", "start"]
