'use strict';

const index = require('../index');
/* global define, it, describe, before */
describe('Testing the database', () => {
  it('Shoudl return the agents', () => {
    var promise = index.agentsFromMongo();
  });
});