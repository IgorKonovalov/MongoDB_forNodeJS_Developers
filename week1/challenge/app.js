let express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    bodyParser = require('body-parser'); // нужно для передачи инфы из формы в js

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

function errorHandler(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  res.status(500).render('error_template', { error: err });
}

MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

  assert.equal(null, err);
  console.log("Successfully connected to MongoDB.");

  app.get('/', function(req, res, next) {
    res.render('form');
  })

  app.post('/movies', function(req, res){
    let name = req.body.name;
    let year = req.body.year;
    let imdb = req.body.imdb;
    console.log(name + ":" + year + ":" + imdb);
    db.collection('movies').insertOne({"title": name, "year": year, "imbd": imdb});
    db.collection('movies').find({}).toArray(function(err, docs) {
      res.render('movies', { 'movies': docs } );
    });
  });

  app.use(function(req, res){
    res.sendStatus(404);
  });

  let server = app.listen(3000, function() {
    let port = server.address().port;
    console.log('Express server listening on port %s.', port);
  });

});
