module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var ComponentSchema = require("./component.schema.server")();
  var ComponentModel = mongoose.model("componentModel", ComponentSchema);

  ComponentModel.setModel = setModel;
  ComponentModel.createComponent = createComponent;
  ComponentModel.findComponentById = findComponentById;
  ComponentModel.updateComponent = updateComponent;
  ComponentModel.deleteComponent = deleteComponent;
  ComponentModel.findAllComponent = findAllComponent;

  return ComponentModel;

  function setModel(_model) {
    model = _model;
  }

  function createComponent(_component){
    return ComponentModel.create(_component);
  }

  function findComponentById(componentId) {
    return ComponentModel.findById(componentId);
  }

  function updateComponent(componentId, _component) {
    return ComponentModel.update({_id: componentId}, {$set: _component});
  }

  function recursiveDelete(modulesOfComponent, componentId) {
    if (modulesOfComponent.length === 0) {
      return ComponentModel
        .remove({_id: componentId})
        .then(function (response) {
          if (response.result.n === 1 && response.result.ok === 1) {
            return response;
          }
        }, function (err) {
          return err;
        });
    }

    return model.moduleModel
      .deleteModuleAndChildren(modulesOfComponent.shift())
      .then(function (response) {
        if (response.result.n === 1 && response.result.ok === 1) {
          return recursiveDelete(modulesOfComponent, componentId);
        }
      }, function (err) {
        return err;
      });
  }

  function deleteComponent(componentId) {
    return ComponentModel
      .findById(componentId)
      .then(function(_component) {
        var modulesOfComponent = _component.modules;
        return recursiveDelete(modulesOfComponent, componentId);
      }, function (err) {
        return err;
      });
  }

  function findAllComponent(){
   return ComponentModel.find({});
  }
};
