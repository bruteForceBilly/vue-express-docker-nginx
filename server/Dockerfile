FROM node:latest
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
ARG API_PORT
ENV API_PORT $API_PORT
CMD [ "npm", "start" ]
