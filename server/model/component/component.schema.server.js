module.exports = function () {
  var mongoose = require("mongoose");

  var componentSchema = mongoose.Schema({
    name: String,
    modules: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "ModuleModel"
    }],
    dateCreated: {
      type: Date,
      default: Date.now()
    }
  }, {collection: "components"});

  return componentSchema;
};
