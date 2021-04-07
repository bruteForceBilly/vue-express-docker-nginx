const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
var cors = require('cors');

var whitelist = [
  'http://localhost',
  'http://localhost:8080',
];

var corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: 'accept, content-type'
};

server.use(cors(corsOptions));
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})



