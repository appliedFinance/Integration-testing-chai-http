const chai = require('chai');
const chaiHTTP = require('chai-http');

// get the stuff from the server to run it
const {app, runServer, closeServer} = require('../server');

describe('Recipes', function() {

	before(function() { return runServer();	});

	after(function() { return closeServer(); });

	it('should list items on GET', function() {
		return chai.request(app)
			.get('/recipes')
			.then(function(result) {
				expect(result).to.have.status(200);
				expect(result).to.be.json;
				expect(result.body).to.be.a('array');
			});
	});
	
	/*it('should list recipes on GET', function(done) {
		chai.request(app)
			.get('/recipes')
			.then(function(result) {
				expect(result).to.have.status(200);
				expect(result).to.be.json;
			})
			.done(done);
	});
	*/
});


