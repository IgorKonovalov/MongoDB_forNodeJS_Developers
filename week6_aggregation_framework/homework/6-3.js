// For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. Write an aggregation query to answer this question.

db.companies.aggregate([ // INCORRECT - doesn't work with doubled companies in Db
  { $match: { "founded_year": 2004 }},
  { $unwind: "$funding_rounds" },
  { $group: {
    _id: "$name",
    num_rounds: { $sum: 1 },
    funded: { $push: "$funding_rounds.raised_amount"}
  } },
  { $match: { "num_rounds": {$gte: 5}}},
  { $project: {
    _id: 1,
    num_rounds: 1,
    average_funding: {$avg: "$funded"}
  }},
  { $sort: {"average_funding": 1}}
]).pretty()

db.companies.aggregate([ // CORRECT
  { $match: { "founded_year": 2004 }},
  { $project: {
    _id: 1,
    name: "$name",
    funding_rounds: "$funding_rounds",
    num_rounds: { $size: "$funding_rounds"}
  }},
  { $match: { "num_rounds": {$gte: 5}}},
  { $unwind: "$funding_rounds" },
  { $group: {
    _id: "$name",
    funded: { $push: "$funding_rounds.raised_amount"}
  } },
  { $project: {
    _id: 1,
    average_funding: {$avg: "$funded"}
  }},
  { $sort: {"average_funding": 1}}
]).pretty()
