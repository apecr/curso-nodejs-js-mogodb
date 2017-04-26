'use strict';

var MongoClient = require('mongodb').MongoClient;
const URL_BBDD = 'mongodb://localhost:27017/cursonode';
const TABLE_AGENTS = 'agents';

var onError = function (error) {
  console.log(error);
  return process.exit();
}

var onResponseMongo = function (docs, db) {
  console.log(docs);
  db.close();
  return docs;
}

var onConnectReturnDocs = function (db) {
  return db.collection(TABLE_AGENTS).find().toArray().then(function (docs) {
    return onResponseMongo(docs, db);
  });
}

var agentsFromMongo = function () {
  var docs = MongoClient.connect(URL_BBDD).then(onConnectReturnDocs).catch(onError);
  console.log(docs);
  return docs;
}

module.exports =  {
  agentsFromMongo: agentsFromMongo()
}