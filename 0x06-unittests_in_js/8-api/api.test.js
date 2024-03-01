const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://127.0.0.1:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      if(_err){
        console.error('Error occurred:', _err);
        done(_err); // Call done with error to indicate test failure
        return;
      }
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
