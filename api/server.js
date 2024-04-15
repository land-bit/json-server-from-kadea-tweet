const jsonServer = require('json-server')

const server = jsonServer.create()

const jsonRouter = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))

server.use(jsonRouter);
server.listen(3000, () => {
  console.log('JSON Server is running');
});