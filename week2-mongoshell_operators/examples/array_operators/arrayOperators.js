db.movieDetails.find({ genres: { $all: ["Comedy", "Crime", "Drama"] } }).pretty() // если встречаются оба в массиве, независимо от остального

db.movieDetails.find({ countries: { $size: 1 } }).pretty() // размер массива

boxOffice: [ { "country": "USA", "revenue": 41.3 },
             { "country": "Australia", "revenue": 2.9 },
             { "country": "UK", "revenue": 10.1 },
             { "country": "Germany", "revenue": 4.3 },
             { "country": "France", "revenue": 3.5 } ]

db.movieDetails.find({ boxOffice: { country: "UK", revenue: { $gt: 15 } } })

db.movieDetails.find({ boxOffice: {$elemMatch: { country: "UK", revenue: { $gt: 15 } } } }) // возвращает поиск внутри одного элемента массива
