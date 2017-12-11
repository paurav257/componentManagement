module.exports = function (app, widgetModel) {

  var multer = require('multer'); // npm install multer --save
  var upload = multer({dest: __dirname + '/../../dist/assets/uploads'});

  app.post("/api/upload", upload.single('myFile'), uploadImage);
  app.post('/api/section/:sectionId/widget', createWidget);
  app.get('/api/section/:sectionId/widget', findAllWidgetsForSection);
  app.put('/api/section/:sectionId/widget', updateSectionOrder);
  app.get('/api/widget/:widgetId', findWidgetById);
  app.put('/api/widget/:widgetId', updateWidget);
  app.delete('/api/widget/:widgetId', deleteWidget);

  function uploadImage(req, res) {
    var widgetId = req.body.widgetId;
    var width = req.body.width;
    var myFile = req.file;

    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var sectionId = req.body.sectionId;

    var originalname = myFile.originalname; // file name on user's computer
    var filename = myFile.filename;     // new file name in upload folder
    var path = myFile.path;         // full path of uploaded file
    var destination = myFile.destination;  // folder where file is saved to
    var size = myFile.size;
    var mimetype = myFile.mimetype;

    widget = {
      'type': 'IMAGE',
      'width': width
    };
    widget.url = '/assets/uploads/' + filename;
    var callbackUrl = '/component';

    if (widgetId === '') {
      widgetModel
        .createWidget(sectionId, widget)
        .then(function (resp) {
          res.redirect(callbackUrl);
        }, function (err) {
          res.status(500).send(err);
        });

    } else {
      widgetModel
        .updateWidget(widgetId, widget)
        .then(function (resp) {
          if (resp.ok === 1 && resp.n === 1) {
            res.redirect(callbackUrl);
          } else {
            res.sendStatus(404);
          }
        }, function (err) {
          res.status(500).send(err);
        });
    }
  }

  function createWidget(req, res) {
    var sectionId = req.param('sectionId');
    var widget = req.body;
    widgetModel
      .createWidget(sectionId, widget)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findAllWidgetsForSection(req, res) {
    var sectionId = req.param('sectionId');
    widgetModel
      .findAllWidgetsForSection(sectionId)
      .then(function (widgets) {
        res.json(widgets);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function findWidgetById(req, res) {
    var widgetId = req.param('widgetId');
    widgetModel
      .findWidgetById(widgetId)
      .then(function (widget) {
        res.json(widget);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateWidget(req, res) {
    var widgetId = req.param('widgetId');
    var widget = req.body;
    widgetModel
      .updateWidget(widgetId, widget)
      .then(function (resp) {
        if (resp.ok === 1 && resp.n === 1) {
          res.json(resp);
        } else {
          res.sendStatus(404);
        }
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function deleteWidget(req, res) {
    var widgetId = req.param('widgetId');
    widgetModel
      .deleteWidget(widgetId)
      .then(function (resp) {
        res.sendStatus(200);
      }, function (err) {
        res.status(500).send(err);
      });
  }

  function updateSectionOrder(req, res) {
    var sectionId = req.param('sectionId');
    var startIndex = parseInt(req.query.initial);
    var endIndex = parseInt(req.query.final);

    widgetModel
      .reorderWidget(sectionId, startIndex, endIndex)
      .then(function (resp) {
        res.json(resp);
      }, function (err) {
        res.status(500).send(err);
      });
  }
};
