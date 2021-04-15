const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.BACKEND_PORT || 3000;
const cors = require('cors');

const whitelist = [
  'http://localhost',
  'http://localhost:8080',
];

const corsOptions = {
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
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  res.header('Content-Type', 'application/json')
  next()
})


server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})



