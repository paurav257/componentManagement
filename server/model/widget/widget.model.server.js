module.exports = function () {
  var model;
  var mongoose = require("mongoose");
  var WidgetSchema = require("./widget.schema.server")();
  var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

  WidgetModel.setModel = setModel;
  WidgetModel.createWidget = createWidget;
  WidgetModel.findAllWidgetsForSection = findAllWidgetsForSection;
  WidgetModel.findWidgetById = findWidgetById;
  WidgetModel.updateWidget = updateWidget;
  WidgetModel.deleteWidget = deleteWidget;
  WidgetModel.reorderWidget = reorderWidget;
  WidgetModel.deleteWidgetOfSection = deleteWidgetOfSection;

  return WidgetModel;

  function setModel(_model) {
    model = _model;
  }

  function createWidget(sectionId, newWidget) {
    return WidgetModel
      .create(newWidget)
      .then(function (widget) {
        return model
          .sectionModel
          .findSectionById(sectionId)
          .then(function (section) {
            widget._section = section._id;
            section.widgets.push(widget._id);
            widget.save();
            section.save();
            return widget;
          }, function (err) {
            return err;
          });
      }, function (err) {
        return err;
      });
  }

  function getWidgetsRecursively(count, widgetsOfSection, widgetCollectionForSection) {
    if (count === 0) {
      return widgetCollectionForSection;
    }

    return WidgetModel
      .findById(widgetsOfSection.shift())
      .select('-__v')
      .then(function (widget) {
        widgetCollectionForSection.push(widget);
        return getWidgetsRecursively(--count,
          widgetsOfSection, widgetCollectionForSection);
      }, function (err) {
        return err;
      });
  }

  function findAllWidgetsForSection(sectionId) {
    return model.sectionModel
      .findSectionById(sectionId)
      .then(function (section) {
        var widgetsOfSection= section.widgets;
        var numberOfWidgets = widgetsOfSection.length;
        var widgetCollectionForSection= [];
        return getWidgetsRecursively(numberOfWidgets,
          widgetsOfSection, widgetCollectionForSection);
      }, function (err) {
        return err;
      });
  }

  function findWidgetById(widgetId) {
    return WidgetModel.findById(widgetId).select('-__v');
  }

  function updateWidget(widgetId, updatedWidget) {
    return WidgetModel.update({_id: widgetId}, {$set: updatedWidget});
  }

  function deleteWidget(widgetId) {
    return WidgetModel
      .findById(widgetId)
      .populate('_section')
      .then(function (widget) {
        widget._section.widgets
          .splice(widget._section.widgets.indexOf(widgetId), 1);
        widget._section.save();
        // if (widget.type == "IMAGE") {
        //   deleteUploadedImage(widget.url);
        // }
        return WidgetModel.remove({_id: widgetId});
      }, function (err) {
        return err;
      });
  }

  function deleteWidgetOfSection(widgetId) {
    return WidgetModel
      .findById(widgetId)
      .then(function (widget) {
        // if (widget.type == "IMAGE") {
        //   deleteUploadedImage(widget.url);
        // }
        return WidgetModel.remove({_id: widgetId});
      }, function (err) {
        return err;
      });
  }

  function reorderWidget(sectionId, start, end) {
    return model.sectionModel
      .findSectionById(sectionId)
      .then(function (section) {
        section.widgets.splice(end, 0, section.widgets.splice(start, 1)[0]);
        section.save();
        return 200;
      }, function (err) {
        return err;
      });
  }

};
