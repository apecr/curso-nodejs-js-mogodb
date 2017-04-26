'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Agent = mongoose.model('Agent');

function returnAgentAF(response, agent){
  return response.json({ok: true, agent: agent});
}

function executeResponse(response){
  return function returnAgent(agent){
    return response.json({ok: true, agent: agent});
  }
}

function nextError(next, error){
  next(error);
}

// recuperar lista de agentes
router.get('/', (req, res, next) => {
  Agent.find().exec((error, listAgents) => {
    if (error) {
      next(error);
      return;
    }
    res.json({ok: true, list: listAgents});
  });
});

// Actualizar un agente
router.put('/:id', (request, response, next)  => {
  var promiseUpdate = Agent.update({_id: request.params.id}, request.body);
  console.log(request.params.id);
  promiseUpdate
    .then(executeResponse(response))
    .catch( error => nextError(next, error));
});

// Crear un agente
router.post('/', (request, response, next) => {
  console.log(request.body);
  var  agent = new Agent(request.body);
  var promiseSave = agent.save();
  promiseSave
    .then((agent) => returnAgentAF(response, agent))
    .catch( error => nextError(next, error));
});
// Borrar un agente
router.delete('/:id', (request, response, next) => {
  var promiseRemove = Agent.remove({_id: request.params.id});
  promiseRemove
    .then((agent) => returnAgentAF(response, agent))
    .catch(error => nextError(next, error));
});


module.exports = router;
