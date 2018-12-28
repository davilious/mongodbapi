const Hapi = require('hapi')
const routes   = require('./routes')
const mongoose = require('mongoose')

require('./database')

const server = Hapi.server({
    host: 'localhost',
    port: 8000,
    routes: { cors: true }
});

const startServer = async () => {
  try {
    routes.forEach((route)=>{
      server.route(route);
    });

    server.start();

    console.log(`Server running at: ${server.info.uri}`);

  } catch (err) {
    console.log(err);
  }
};

startServer();

