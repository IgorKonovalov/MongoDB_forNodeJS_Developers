// full list is on https://docs.mongodb.com/manual/reference/operator/query-comparison/
db.movieDetails.find({ runtime: { $gt: 90 } }).count() // more than 90

db.movieDetails.find({ runtime: { $gt: 90, $lt: 120 } }).count() // more than 90 less than 120

db.movieDetails.find({ "tomato.meter": { $gte: 95 }, runtime: { $gt: 180 } }) // more or equal to 95, runtime more than 180

db.movieDetails.find({ rated: { $ne: "UNRATED" } }).count() // not equal somethn

db.movieDetails.find({ rated: { $in: ["G", "PG"] } }).pretty() // matches any of specifed in array
