const mongoose = require('mongoose');
/**
 * User Schema
 * @private
 */
const UserSchema = new mongoose.Schema({
  name:{
    type: String
  },
  email:{
    type: String
  },
  age:{
    type: Number
  },
  gender:{
    type: String
  }
}, {
    timestamps: true,
});

/**
 * @typedef Users
 */
module.exports = mongoose.model('Users', UserSchema);