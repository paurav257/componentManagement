module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var UserSchema = require("./user.schema.server")();
  var UserModel = mongoose.model("UserModel", UserSchema);

  UserModel.setModel = setModel;
  UserModel.createUser = createUser;
  UserModel.findUserById = findUserById;
  UserModel.findUserByUsername = findUserByUsername;
  UserModel.findUserByCredentials = findUserByCredentials;
  UserModel.updateUser = updateUser;
  UserModel.deleteUser = deleteUser;
  UserModel.findUserByFacebookId = findUserByFacebookId;

  return UserModel;

  function setModel(_model) {
    model = _model;
  }

  function createUser(user) {
    return UserModel.create(user);
  }

  function findUserById(userId) {
    return UserModel.findById(userId);
  }

  function findUserByUsername(username) {
    return UserModel.findOne({email: username});
  }

  function findUserByCredentials(_username, _password) {
    return UserModel.findOne({
      userName: _username,
      password: _password
    });
  }

  function updateUser(userId, updatedUser) {
    return UserModel.update({_id: userId}, {$set: updatedUser});
  }

  function deleteUser(userId) {
    return UserModel
      .remove({_id: userId})
      .then(function (response) {
        if (response.result.n === 1 && response.result.ok === 1) {
          return response;
        }
      }, function (err) {
        return err;
      });
  }

  function findUserByFacebookId(facebookId) {
    return UserModel.findOne({'facebook.id': facebookId});
  }

};
