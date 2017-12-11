module.exports = function () {
  var mongoose = require("mongoose");

  var userSchema = mongoose.Schema({
    userName: String,
    password: String,
    firstName: String,
    lastName: String,
    admin: Boolean,
    email: String,
    phone: String,
    dateCreated: {
      type: Date,
      default: Date.now()
    },
    facebook: {
      id:    String,
      token: String
    }
  }, {collection: "users"});

  return userSchema;
};
