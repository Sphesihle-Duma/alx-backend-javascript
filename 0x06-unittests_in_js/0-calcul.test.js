const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function (){
  it('should return the sum of rounded numbers', function (){
     assert.strictEqual(calculateNumber(1, 3), 4)
     assert.strictEqual(calculateNumber(1, 3.7), 5)
     assert.strictEqual(calculateNumber(1.2, 3.7), 5)
     assert.strictEqual(calculateNumber(1.5, 3.7), 6)
     assert.strictEqual(calculateNumber(0, 8), 8)
     assert.strictEqual(calculateNumber(8, 0), 8)
});
  it('testing sum of negative numbers', function(){
     assert.strictEqual(calculateNumber(-0.5, -1,2), -1);
     assert.strictEqual(calculateNumber(-1.7, -4.4), -6);
     assert.strictEqual(calculateNumber(0, 0), 0);
});
  it('testing the combination of positive and negative numbers', function(){
     assert.strictEqual(calculateNumber(-8.8, 0), -9);
     assert.strictEqual(calculateNumber(-3.7, 8.6), 5);
     assert.strictEqual(calculateNumber(10, -3), 7);
});
  it('testing the large numbers', function(){
     assert.strictEqual(calculateNumber(1000000, 2000000), 3000000);
});
  it('testing the rounding behavior', function(){
     assert.strictEqual(calculateNumber(2.5, 2.5), 6);
     assert.strictEqual(calculateNumber(1.47, 1.49), 2);
});
});
