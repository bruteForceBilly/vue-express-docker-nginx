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
EXPOSE 3000
RUN mkdir /app
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /app
