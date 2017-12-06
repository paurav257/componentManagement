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

  function createSection(moduleId,_section) {
    return SectionModel
      .create(_section)
      .then(function (section) {
        return model.moduleModel
          .findModuleById(moduleId)
          .then(function (_module) {
            _module.sections.push(section);
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
                                  sectionsOfPage, sectionCollectionForModule) {
    if (numberOfSections === 0) {
      return sectionCollectionForModule;
    }

    return SectionModel
      .findById(sectionsOfPage.shift())
      .select('-__v')
      .then(function (section) {
        sectionCollectionForModule.push(section);
        return getSectionsRecursively(--numberOfSections,
          sectionsOfPage, sectionCollectionForModule);
      }, function (err) {
        return err;
      });
  }

  function findAllSectionsForModule(moduleId) {
    return model.moduleModel
      .findModuleById(moduleId)
      .then(function (_module) {
        var sectionsOfPage = _module.sections;
        var numberOfSections = sectionsOfPage.length;
        var sectionCollectionForModule = [];
        return getSectionsRecursively(numberOfSections,
          sectionsOfPage, sectionCollectionForModule);
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
