module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var ModuleSchema = require("./module.schema.server")();
  var ModuleModel = mongoose.model("moduleModel", ModuleSchema);

  ModuleModel.setModel = setModel;
  ModuleModel.createModule = createModule;
  ModuleModel.findAllModulesForComponent = findAllModulesForComponent;
  ModuleModel.findModuleById = findModuleById;
  ModuleModel.reorderModule = reorderModule;
  ModuleModel.updateModule = updateModule;
  ModuleModel.deleteModule = deleteModule;

  return ModuleModel;

  function setModel(_model) {
    model = _model;
  }

  function createModule(_module){
    return ModuleModel.create(_module);
  }

  function getSectionsRecursively(numberOfModules,
                                  modulesOfComponent, moduleCollectionForComponent) {
    if (numberOfModules === 0) {
      return moduleCollectionForComponent;
    }

    return ModuleModel
      .findModuleById(modulesOfComponent.shift())
      .select('-__v')
      .then(function (section) {
        moduleCollectionForComponent.push(section);
        return getSectionsRecursively(--numberOfModules,
          modulesOfComponent, moduleCollectionForComponent);
      }, function (err) {
        return err;
      });
  }

  function findAllModulesForComponent(componentId) {
    return model.componentModel
      .findComponentById(componentId)
      .then(function (_component) {
        var modulesOfComponent = _component.modules;
        var numberOfModules = modulesOfComponent.length;
        var moduleCollectionForComponent = [];
        return getSectionsRecursively(numberOfModules,
          modulesOfComponent, moduleCollectionForComponent);
      }, function (err) {
        return err;
      })
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

  function reorderModule(componentId, start, end) {
    return model.componentModel
      .findComponentById(componentId)
      .then(function (component) {
        component.modules.splice(end, 0, component.modules.splice(start, 1)[0]);
        component.save();
        return 200;
      }, function (err) {
        return err;
      });
  }
};
