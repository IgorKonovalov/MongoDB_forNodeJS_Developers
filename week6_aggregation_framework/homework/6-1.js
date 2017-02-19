db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        count: { $sum: 1 }
    } },
    { $sort: { count: -1 } }
] )

db.companies.aggregate( [
    { $match: { "relationships.person": { $ne: null } } },
    { $project: { relationships: 1, _id: 0, name: 1 } },
    { $unwind: "$relationships" },
    { $group: {
        _id: "$relationships.person",
        company: { $addToSet: "$name"},
    } },
    { $match: { "_id.permalink": "eric-di-benedetto"}}
  ] ).pretty()
