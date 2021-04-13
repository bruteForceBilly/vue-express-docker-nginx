FROM node:latest as build-stage
WORKDIR /app
COPY package*.json yarn*.lock ./
RUN yarn install
COPY . .
ARG VUE_APP_API
ARG NODE_ENV
ENV VUE_APP_API $VUE_APP_API
ENV NODE_ENV $NODE_ENV
RUN yarn build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf