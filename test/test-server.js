var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

describe ('Shoppping List', function() {
	it('should list items on GET', function(done) {
        chai.request(app)
            .get('/items')
            .end(function(err, res) {
                res.should.have.status(200);
                console.log(res);
                res.should.be.json;
                done();
            });
    });
    it('should add an item on post');
    it('should edit an item on put');
    it('should delete an item on delete');
	it('POST to an ID that exists');
	it('POST without body data');
	it('POST with something other than valid JSON');
	it('PUT without an ID in the endpoint');
	it('PUT with different ID in the endpoint than the body');
	it("PUT to an ID that doesn't exist");
	it("PUT without body data");
	it("PUT with something other than valid JSON");
	it("DELETE an ID that doesn't exist");
	it("DELETE without an ID in the endpoint");


});