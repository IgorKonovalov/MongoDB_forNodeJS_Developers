// For companies in our collection founded in 2004 and having 5 or more rounds of funding, calculate the average amount raised in each round of funding. Which company meeting these criteria raised the smallest average amount of money per funding round? You do not need to distinguish between currencies. Write an aggregation query to answer this question.

db.companies.aggregate([ // сверху будет компания, встречающаяся 2 раза в DB. после unwind количество ее funding rounds будет 8 вместо 4 и она встанет на первое место, поэтому берем второе
  { $match: { "founded_year": 2004 }},
  { $unwind: "$funding_rounds" },
  { $group: {
    _id: { company: "$name" },
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
