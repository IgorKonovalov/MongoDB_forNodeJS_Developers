{
    "_id" : ObjectId("5692a15524de1e0ce2dfcfa3"),
    "title" : "Toy Story 3", // find all but show only titles db.collection.find({}, {title: 1, _id: 0}).pretty()
    "year" : 2010,
    "rated" : "G", // find by rated db.collection.find({ rated: "G" }).pretty()
    "released" : ISODate("2010-06-18T04:00:00Z"),
    "runtime" : 103, // find by rated and runtime db.collection.find({ "rated": "G", "runtime": 103 }).pretty()
    "countries" : [
        "USA"
    ],
    "genres" : [ // how many? add .count() 
        "Animation",
        "Adventure",
        "Comedy"
    ],
    "director" : "Lee Unkrich",
    "writers" : [
        "John Lasseter",
        "Andrew Stanton",
        "Lee Unkrich",
        "Michael Arndt"
    ],
    "actors" : [ // find by array value in order db.collection.find({ "actors": ["Tom Hanks", "Tim Allen"] }).pretty()
        "Tom Hanks", // find in array with exact position db.collection.find({ "actors.0": "Tom Hanks"})
        "Tim Allen",
        "Joan Cusack",
        "Ned Beatty"
    ],
    "plot" : "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    "poster" : "http://ia.media-imdb.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
    "imdb" : {
        "id" : "tt0435761",
        "rating" : 8.4,
        "votes" : 500084
    },
    "tomato" : {
        "meter" : 99,
        "image" : "certified",
        "rating" : 8.9,
        "reviews" : 287,
        "fresh" : 283,
        "consensus" : "Deftly blending comedy, adventure, and honest emotion, Toy Story 3 is a rare second sequel that really works.",
        "userMeter" : 89,
        "userRating" : 4.3,
        "userReviews" : 602138
    },
    "metacritic" : 92,
    "awards" : {
        "wins" : 56,
        "nominations" : 86,
        "text" : "Won 2 Oscars. Another 56 wins & 86 nominations."
    },
    "type" : "movie"
}
