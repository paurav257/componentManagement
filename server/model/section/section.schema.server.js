module.exports = function () {
  var mongoose = require("mongoose");

  var sectionSchema = mongoose.Schema({
    name: String,
    index: Number,
    _module: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModuleModel"
    },
    widgets: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "WidgetModel"
    }],
    dateCreated: {
      type: Date,
      default: Date.now()
    }
  }, {collection: "sections"});

  return sectionSchema;
};
