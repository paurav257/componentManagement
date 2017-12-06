/* the function is a Java script constructor which will be instantiated from top level server.js */
/* req = parses the req from http, parses and makes it a nice clean object */
// params is part of the request. any variables in the path will be available as a a map in params

module.exports = function (app) {
  var model = require('./model/models.server')();
  var userService = require("./service/user.service.server.js");
  userService(app, model.userModel);
  var moduleService = require("./service/module.service.server");
  moduleService(app, model.moduleModel);
  var sectionService = require("./service/section.service.server");
  sectionService(app, model.sectionModel);
  var widgetService = require("./service/widget.service.server");
  widgetService(app, model.widgetModel);
};
