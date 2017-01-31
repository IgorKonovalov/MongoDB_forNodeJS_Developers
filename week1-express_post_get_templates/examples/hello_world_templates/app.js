let express = require('express'),
    app = express(),
    engines = require('consolidate'); // движок для тем

app.engine('html', engines.nunjucks); // определяем движок (nunjucks)
app.set('view engine', 'html');
app.set('views', __dirname + '/views'); // движок рендерит html внутри папки views

app.get('/', function(req, res) {
    res.render('hello', { name : 'Templates' });
});

app.use(function(req, res){
    res.sendStatus(404);
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Express server listening on port %s', port);
});
