let express = require('express'),
    app = express(),
    engines = require('consolidate'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert'); // устанавливаем зависимости

app.engine('html', engines.nunjucks); // настраиваем шаблон
app.set('view engine', 'html'); // рендерим html
app.set('views', __dirname + '/views'); // из папки views

MongoClient.connect('mongodb://localhost:27017/video', function(err, db) { // подключаемся к базе

    assert.equal(null, err); // модуль сравнивает ошибку с нулем
    console.log("Successfully connected to MongoDB.");

    app.get('/', function(req, res){

        db.collection('movies').find({}).toArray(function(err, docs) { // получаем обьект из базы данных, превращаем в массив
            res.render('movies', { 'movies': docs } ); // и пускаем на рендер. первое movies - название шаблона (см views), второе - то что мы в него пускаем
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
