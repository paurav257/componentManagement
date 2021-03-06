module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var SectionSchema = require("./section.schema.server")();
  var SectionModel = mongoose.model("SectionModel", SectionSchema);

  SectionModel.setModel = setModel;
  SectionModel.createSection = createSection;
  SectionModel.findSectionById = findSectionById;
  SectionModel.findAllSectionsForModule = findAllSectionsForModule;
  SectionModel.updateSection = updateSection;
  SectionModel.deleteSection = deleteSection;
  SectionModel.reorderSection = reorderSection;
  SectionModel.deleteSectionAndChildren = deleteSectionAndChildren;

  return SectionModel;

  function setModel(_model) {
    model = _model;
  }

  function createSection(moduleId, _section) {
    return SectionModel
      .create(_section)
      .then(function (section) {
        return model.moduleModel
          .findModuleById(moduleId)
          .then(function (_module) {
            console.log(moduleId);
            console.log(_module);
            _module.sections.push(section._id);
            section._module = _module._id;
            _module.save();
            section.save();
            return section;
          }, function (err) {
            return err;
          });
      }, function (err) {
        return err;
      });
  }

  function findSectionById(sectionId) {
    return SectionModel.findById(sectionId);
  }

  function getSectionsRecursively(numberOfSections,
                                  sectionsOfModule, sectionCollectionForModule) {
    if (numberOfSections === 0) {
      return sectionCollectionForModule;
    }

    return SectionModel
      .findSectionById(sectionsOfModule.shift())
      .select('-__v')
      .then(function (section) {
        sectionCollectionForModule.push(section);
        return getSectionsRecursively(--numberOfSections,
          sectionsOfModule, sectionCollectionForModule);
      }, function (err) {
        return err;
      });
  }

  function findAllSectionsForModule(moduleId) {
    return model.moduleModel
      .findModuleById(moduleId)
      .then(function (_module) {
        var sectionsOfModule = _module.sections;
        var numberOfSections = sectionsOfModule.length;
        var sectionCollectionForModule = [];
        return getSectionsRecursively(numberOfSections,
          sectionsOfModule, sectionCollectionForModule);
      }, function (err) {
        return err;
      })
  }

  function updateSection(sectionId, section) {
    return SectionModel.update({_id: sectionId}, {$set: section});
  }

  function deleteSection(sectionId) {
    return SectionModel
      .findById(sectionId)
      .populate('_module')
      .then(function (section) {
        section._module.sections
          .splice(section._module.sections.indexOf(sectionId), 1);
        section._module.save();
        return deleteSectionAndChildren(sectionId);
      }, function (err) {
        return err;
      });
  }

  function reorderSection(moduleId, start, end) {
    return model.moduleModel
      .findModuleById(moduleId)
      .then(function (module) {
        module.sections.splice(end, 0, module.sections.splice(start, 1)[0]);
        module.save();
        return 200;
      }, function (err) {
        return err;
      });
  }

  function recursiveDelete(widgetsOfSection, sectionId){
    if (widgetsOfSection.length === 0) {
      return SectionModel
        .remove({_id: sectionId})
        .then(function (response) {
          if (response.result.n === 1 && response.result.ok === 1) {
            return response;
          }
        }, function (err) {
          return err;
        });
    }

    return model.widgetModel
      .deleteWidgetOfSection(widgetsOfSection.shift())
      .then(function (response) {
        if (response.result.n === 1 && response.result.ok === 1) {
          return recursiveDelete(widgetsOfSection, sectionId);
        }
      }, function (err) {
        return err;
      });
  }

  function deleteSectionAndChildren(sectionId) {
    return SectionModel
      .findById({_id: sectionId})
      .then(function (section) {
        var widgetsOfSection = section.widgets;
        return recursiveDelete(widgetsOfSection, sectionId);
      }, function (err) {
        return err;
      });
  }
};
