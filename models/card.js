const mongoose = require('mongoose');

const card = new mongoose.Schema({
  app_name: String,
  title: String,
  users: Array,
  tags: Array,
  state: String
})

module.exports = mongoose.model('card', card)

