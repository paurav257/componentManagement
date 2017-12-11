module.exports = function (app, componentModel) {

  app.post('/api/component', createComponent);
  app.get('/api/component', findAllComponent)
  app.get('/api/component/:componentId', findComponentById);
  app.put('/api/component/:componentId', updateComponent);
  app.delete('/api/component/:componentId', deleteComponent);

  function createComponent(req, res) {
    var component = req.body;
    componentModel
      .createComponent(component)
      .then(function (component) {
        res.json(component);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findComponentById(req, res) {
    var componentId = req.param('componentId');
    componentModel
      .findComponentById(componentId)
      .then(function (component) {
        res.json(component);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateComponent(req, res) {
    var componentId = req.param('componentId');
    var component = req.body;
    componentModel
      .updateComponent(componentId, component)
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

  function deleteComponent(req, res) {
    var componentId = req.param('componentId');
    componentModel
      .deleteComponent(componentId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findAllComponent(req, res) {
    componentModel
      .findAllComponent()
      .then(function (components) {
        res.json(components);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
