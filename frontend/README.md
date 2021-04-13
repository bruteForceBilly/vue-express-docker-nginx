## vue-express-docker-nginx example

This repo is an example of how to set docker to compose a vue.js frontend app that is compiled in build mode and served by nginx together with an express back end (json-server). 

## Quick start
```
VUE_APP_API=<your host + port 3000> docker-compose build
docker-compose up
````

Frontend app will run on port 8080
