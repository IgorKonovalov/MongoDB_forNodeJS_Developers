var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"permalink": {"$exists": true, "$ne": null}};
    var projection = {"permalink": 1, "updated_at": 1};

    var cursor = db.collection('companies').find(query);
    cursor.project(projection);
    cursor.sort({"permalink": 1}) // если ничего дополнительного не делать, сервер будет падать с ошибкой от переполнения памяти, так как производит операции сортировки в памяти и она быстро кончается. Чтоб этого избежать, нам нужно обратиться к базе данных (например через mshell) и выполнить команду db.companies.createIndex({permalink: 1}) - таким образом мы составляем индекс сортировки уже внутри базы и дополнительной сортировки при вызове не нужно делать.

    var numToRemove = 0;

    var previous = { "permalink": "", "updated_at": "" };
    cursor.forEach(
        function(doc) {

            if ( (doc.permalink == previous.permalink) && (doc.updated_at == previous.updated_at) ) {
                console.log(doc.permalink);

                numToRemove = numToRemove + 1;

                var filter = {"_id": doc._id};

                db.collection('companies').deleteOne(filter, function(err, res) { // удаляет первый документ, который удовлетворяет фильтру

                    assert.equal(err, null);
                    console.log(res.result);

                });

            }

            previous = doc;

        },
        function(err) {

            assert.equal(err, null);

        }
    );

});
