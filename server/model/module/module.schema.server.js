module.exports = function () {
  var mongoose = require("mongoose");

  var moduleSchema = mongoose.Schema({
    name: String,
    _component: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ComponentModel"
    },
    sections: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "SectionModel"
    }],
    dateCreated: {
      type: Date,
      default: Date.now()
    }
  }, {collection: "modules"});

  return moduleSchema;
};
