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

  function createModule(_module){
    return ModuleModel.create(_module);
  }

  function findModuleById(moduleId) {
    return ModuleModel.findById(moduleId);
  }

  function updateModule(moduleId, _module) {
    return ModuleModel.update({_id: moduleId}, {$set: _module});
  }

  function recursiveDelete(sectionsOfModule, moduleId) {
    if (sectionsOfModule.length === 0) {
      return ModuleModel
        .remove({_id: moduleId})
        .then(function (response) {
          if (response.result.n === 1 && response.result.ok === 1) {
            return response;
          }
        }, function (err) {
          return err;
        });
    }

    return model.sectionModel
      .deleteSectionAndChildren(sectionsOfModule.shift())
      .then(function (response) {
        if (response.result.n === 1 && response.result.ok === 1) {
          return recursiveDelete(sectionsOfModule, moduleId);
        }
      }, function (err) {
        return err;
      });
  }

  function deleteModule(moduleId) {
    return ModuleModel
      .findById(moduleId)
      .then(function(_module) {
        var sectionsOfModule = _module.sections;
        return recursiveDelete(sectionsOfModule, moduleId);
      }, function (err) {
        return err;
      });
  }

  function findAllModule() {
    return ModuleModel.find({});
  }
};
