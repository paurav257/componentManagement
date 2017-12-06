module.exports = function (app, moduleModel) {

  app.post('/api/component/:componentId/module', createModule);
  app.get('/api/component/:componentId/module', findAllModulesForComponent);
  app.put('/api/component/:componentId/module', updateModuleOrder);
  app.get('/api/module/:moduleId', findModuleById);
  app.put('/api/module/:moduleId', updateModule);
  app.delete('/api/module/:moduleId', deleteModule);

  function createModule(req, res) {
    var module = req.body;
    moduleModel
      .createModule(module)
      .then(function (module) {
        res.json(module);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findAllModulesForComponent(req, res) {
    var componentId = req.param('componentId');
    moduleModel
      .findAllModulesForComponent(componentId)
      .then(function (modules) {
        res.json(modules);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findModuleById(req, res) {
    var moduleId = req.param('moduleId');
    moduleModel
      .findModuleById(moduleId)
      .then(function (module) {
        res.json(module);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateModule(req, res) {
    var moduleId = req.param('moduleId');
    var module = req.body;
    moduleModel
      .updateModule(moduleId, module)
      .then(function (resp) {
        if(resp.ok === 1 && resp.n === 1) {
          res.sendStatus(200)
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function deleteModule(req, res) {
    var moduleId = req.param('moduleId');
    moduleModel
      .deleteModule(moduleId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateModuleOrder(req, res) {
    var componentId = req.param('componentId');
    var startIndex = parseInt(req.query.initial);
    var endIndex = parseInt(req.query.final);

    moduleModel
      .reorderModule(componentId, startIndex, endIndex)
      .then(function (resp) {
        res.json(resp);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
