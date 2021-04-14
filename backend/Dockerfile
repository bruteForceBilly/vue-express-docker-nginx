FROM node:latest
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
ARG BACKEND_PORT
ENV BACKEND_PORT $BACKEND_PORT
CMD [ "npm", "start" ]
