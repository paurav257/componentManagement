module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var ModuleSchema = require("./module.schema.server")();
  var ModuleModel = mongoose.model("moduleModel", ModuleSchema);

  ModuleModel.setModel = setModel;
  ModuleModel.createModule = createModule;
  ModuleModel.findModuleById = findModuleById;
  ModuleModel.updateModule = updateModule;
  ModuleModel.deleteModule = deleteModule;
  ModuleModel.findAllModule = findAllModule;

  return ModuleModel;

  function setModel(_model) {
    model = _model;
  }


};
