// для каждого класса собрать студентов в кучу, затем для каждого студента посчитать среднее количество баллов, без quiz, затем посчитать среднее количество баллов в классе.

db.grades.aggregate([
  { $unwind: "$scores"},
  { $match: { "scores.type": { $ne: "quiz"}}},
  { $group: {
    _id: {"class": "$class_id"},
    scores: { $avg: "$scores.score"}
  }},
  { $sort: { "scores": -1}}
]).pretty()
