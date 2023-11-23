
const mongoose = require('mongoose');

const data = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  username: String,
  password: String,

  
});

module.exports = mongoose.model('data', data);
