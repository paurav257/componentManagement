module.exports = function (app, sectionModel) {

  app.post('/api/module/:moduleId/section', createSection);
  app.get('/api/module/:moduleId/section', findAllSectionsForModule);
  app.put('/api/module/:moduleId/section', updateSectionOrder);
  app.get('/api/section/:sectionId', findSectionById);
  app.put('/api/section/:sectionId', updateSection);
  app.delete('/api/section/:sectionId', deleteSection);

  function createSection(req, res) {
    var moduleId = req.param('moduleId');
    var section = req.body;
    sectionModel
      .createSection(moduleId, section)
      .then(function (section) {
        res.json(section);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findAllSectionsForModule(req, res) {
    var moduleId = req.param('moduleId');
    sectionModel
      .findAllSectionsForModule(moduleId)
      .then(function (sections) {
        res.json(sections);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findSectionById(req, res) {
    var sectionId = req.param('sectionId');
    sectionModel
      .findSectionById(sectionId)
      .then(function (section) {
        res.json(section);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateSection(req, res) {
    var sectionId = req.param('sectionId');
    var section = req.body;
    sectionModel
      .updateSection(pageId, section)
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

  function deleteSection(req, res) {
    var sectionId = req.param('sectionId');
    sectionModel
      .deleteSection(sectionId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateSectionOrder(req, res) {
    var moduleId = req.param('moduleId');
    var startIndex = parseInt(req.query.initial);
    var endIndex = parseInt(req.query.final);

    sectionModel
      .reorderSection(moduleId, startIndex, endIndex)
      .then(function (resp) {
        res.json(resp);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
