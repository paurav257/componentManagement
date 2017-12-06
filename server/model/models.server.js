module.exports = function () {

  var userModel = require("./user/user.model.server")();
  var componentModel = require('./component/component.model.server')();
  var moduleModel = require("./module/module.model.server")();
  var sectionModel = require("./section/section.model.server")();
  var widgetModel = require("./widget/widget.model.server")();

  var model = {
    userModel: userModel,
    componentModel: componentModel,
    moduleModel: moduleModel,
    sectionModel: sectionModel,
    widgetModel: widgetModel
  };

  userModel.setModel(model);
  componentModel.setModel(model);
  moduleModel.setModel(model);
  sectionModel.setModel(model);
  widgetModel.setModel(model);

  return model;
};
