const assert = require('assert')
const calculateNumber = require('./1-calcul.js')
describe('Testing calculateNumber', function(){
   describe('SUM operation', function(){
     it('testing simple addition', function(){
       assert.strictEqual(calculateNumber('SUM', 1.4, 1.5), 3)
});
   describe('SUBTRACT operation', function(){
     it('testing simple subtraction', function(){
       assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
});
   describe('DIVIDE operation', function(){
     it('testing a simple division', function(){
       assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
       assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
});
});
});
});
});
