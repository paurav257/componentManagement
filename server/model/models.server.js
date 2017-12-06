module.exports = function () {

  var userModel = require("./user/user.model.server")();
  var moduleModel = require("./module/module.model.server")();
  var sectionModel = require("./section/section.model.server")();

  var model = {
    userModel: userModel,
    moduleModel: moduleModel,
    sectionModel: sectionModel
  };

  userModel.setModel(model);
  moduleModel.setModel(model);
  sectionModel.setModel(model);

  return model;
};
