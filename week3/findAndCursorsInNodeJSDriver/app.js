// mongoimport -d crunchbase -c companies companies.json

var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'); // простая проверка на ошибки


MongoClient.connect('mongodb://localhost:27017/companies', function(err, db) { // 'куда', функция - обработчик ()

    assert.equal(err, null); // тут проверяем что нет ошибки на то что нет коннекта к базе
    console.log("Successfully connected to MongoDB.");

    var query = {"category_code": "biotech"};

    db.collection('companies').find(query).toArray(function(err, docs) { // представляем полученное в поиске как массив (ES6) - используется весь объем найденного сразу. Когда мы вызываем метод toArray - метод find вызывается для всего объекта сразу, потому что мы должны иметь весь объект для перевода его в массив целиком.

        assert.equal(err, null); // опять выкидываем ошибку если не приконектились к коллекции
        assert.notEqual(docs.length, 0); // или нет документов, удовлетворяющих запросу

        docs.forEach(function(doc) { // если все хорошо, форичем выводим результат(у нас уже массив на руках)
            console.log( doc.name + " is a " + doc.category_code + " company." );
        });

        db.close();

    });

});
