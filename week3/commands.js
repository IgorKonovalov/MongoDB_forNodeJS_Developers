db.dropDatabase() // удаляет текущую базу - выполняется ИЗ mongoshell
mongoimport -d crunchbase -c companies companies.json // добавляет в базу 'crunchbase' в коллекцию 'companies' инфу из json - выполняется из командной строки!  (mongoimport отдельная прога)
db.companies.createIndex({permalink: 1}) // создает индекс сортировки
