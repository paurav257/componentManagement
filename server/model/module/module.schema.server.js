module.exports = function () {
  var mongoose = require("mongoose");

  var moduleSchema = mongoose.Schema({
    name: String,
    index: Number,
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
