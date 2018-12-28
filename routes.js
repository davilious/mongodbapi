const api = require('./api')

const routes = [
  {
    method: 'GET',
    path: '/api/all',
    options: api.card.all
  },
  {
    method: 'PUT',
    path: '/api/update/{id}',
    options: api.card.update
  },
  {
    method: 'POST',
    path: '/api/add',
    options: api.card.add
  }]

module.exports = routes;
