const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/kanhub', {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});
