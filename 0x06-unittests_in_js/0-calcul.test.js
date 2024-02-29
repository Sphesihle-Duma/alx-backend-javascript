const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function (){
  it('should return the sum of rounded numbers', function (){
     assert.strictEqual(calculateNumber(1, 3), 4)
     assert.strictEqual(calculateNumber(1, 3.7), 5)
     assert.strictEqual(calculateNumber(1.2, 3.7), 5)
     assert.strictEqual(calculateNumber(1.5, 3.7), 6)
});
  it('testing sum of negative numbers', function(){
     assert.strictEqual(calculateNumber(-0.5, -1,2), -1);
     assert.strictEqual(calculateNumber(-1.7, -4.4), -6);
     assert.strictEqual(calculateNumber(0, 0), 0);
});
  it('testing the combination of positive and negative numbers', function(){
     assert.strictEqual(calculateNumber(-8.8, 0), -9);
     assert.strictEqual(calculateNumber(-3.7, 8.6), 5)  
});
});
