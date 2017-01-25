// mongoimport -d crunchbase -c companies companies.json


var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"category_code": "biotech"};

    var cursor = db.collection('companies').find(query); // мы можем присвоить результат поиска объекту, этот обьект - курсор, для которого работает форич. Таким образом объект cursor представляет из себя поток документа - метод find() не делает нового запроса к бд пока мы не вызываем следующий обьект, таким образом экономится память

    cursor.forEach( // это специальный форич для курсоров - принимает две функции, для текущего документа и ошибки
        function(doc) {
            console.log( doc.name + " is a " + doc.category_code + " company." );
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
