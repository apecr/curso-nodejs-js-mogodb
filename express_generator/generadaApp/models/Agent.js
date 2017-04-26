'use strict';

var mongoose = require('mongoose');

var agentSchema = mongoose.Schema({
  name: String,
  age: Number
});

// Crear
mongoose.model('Agent', agentSchema);

// Recuperar
// mongoose.model('Agent');