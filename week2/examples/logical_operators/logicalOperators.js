db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 99 } }, // синтаксис логического или (массив)
                               { "metacritic": { $gt: 95 } } ] })


db.movieDetails.find({ $and : [ { "metacritic": { $ne: 100 } }, // синтаксис лотического и
                                { "metacritic" { $exists: true } } ] })
