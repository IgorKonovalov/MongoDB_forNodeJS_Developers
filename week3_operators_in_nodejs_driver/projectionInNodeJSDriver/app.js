
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');


MongoClient.connect('mongodb://localhost:27017/crunchbase', function(err, db) {

    assert.equal(err, null);
    console.log("Successfully connected to MongoDB.");

    var query = {"category_code": "biotech"};
    var projection = {"name": 1, "category_code": 1, "_id": 0}; // действует как второй аргумент find() если вызывается из командной строки - вызывает только определенные поля документа или вызывает все кроме (если указаны только '0')

    // cursor.project(projection); можно разделять или чейнить по взрослому:
    // cursor.forEach

    var cursor = db.collection('companies')
                   .find(query)
                   .project(projection)
                   .forEach(function(doc) {
            console.log(doc.name + " is a " + doc.category_code + " company.");
            console.log(doc);
        },
        function(err) {
            assert.equal(err, null);
            return db.close();
        }
    );

});
