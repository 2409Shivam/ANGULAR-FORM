const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  mobile: String,
  dob: Date
});

module.exports = mongoose.model('User', userSchema);
