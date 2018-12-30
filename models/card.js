const mongoose = require('mongoose');

const card = new mongoose.Schema({
  app_name: String,
  title: {
    type: String,
    required: true
  },
  users: Array,
  tags: Array,
  state: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('card', card)

