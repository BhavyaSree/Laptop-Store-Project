const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('./index.js');
const should = chai.should();
const expect = chai.expect;
// products list
const productsList = require('./data/data.json');

describe('GET /products', () => {
  it('should return a list of products when called', done => {
    chai
      .request(app)
      .get('/products')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.deep.equal(productsList);
        done();
      });
  });
});

