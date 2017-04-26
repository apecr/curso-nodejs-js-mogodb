'use strict';

var mongoose = require('mongoose');

var agentSchema = mongoose.Schema({
  name: String,
  age: Number
});

agentSchema.statics.list = function (filter, limit, skip, fields, sort, callback) {
  var query = Agent.find(filter);
  query.limit(limit);
  query.skip(skip);
  query.select(fields);
  query.sort(sort);
  query.exec(callback);
}

// Crear
var Agent = mongoose.model('Agent', agentSchema);

// Recuperar
// mongoose.model('Agent');