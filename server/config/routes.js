var mongooses = require('./../controllers/mongooses.js');

module.exports = function(app){
	app.post('/mongoose', function(req, res){
		console.log("Made it to the post /mongoose route");
		mongooses.createMongoose(req,res);
		// mongooseController.getMongooses(req, res);
	})

	app.post('/updateMongoose', function(req, res){
		console.log("Made it to the post /updateMongoose route");
		mongooses.updateMongoose(req,res);
		// mongooseController.getMongooses(req, res);
	})

	app.get('/mongooses', function(req, res){
		console.log("Made it to the get /mongoose route");
		mongooses.getMongooses(req,res);
		// mongooseController.getMongooses(req, res);
	})

	app.get('/show/:id', function(req, res){
		console.log("Made it to the get /mongoose route");
		mongooses.getMongoose(req,res);
		// mongooseController.getMongooses(req, res);
	})
}