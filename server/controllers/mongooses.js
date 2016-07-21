var mongoose = require('mongoose');
var mongooseDb = mongoose.model('Mongoosedb');

module.exports = (function() {
	return {
		createMongoose: function(req, res){
			mongoose = new mongooseDb(req.body);
			mongoose.save(function(err, result){
				if(err){
					console.log("error creating a new mongoose");
				} else {
					console.log("you made a new mongoose!", result);
					res.json(result);
				}
			})
		},
		
		getMongooses: function(req, res){
			mongooseDb.find({}, function(err, mongooses){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					res.json(mongooses);
				}
			})
		},
		getMongoose: function(req, res){
			mongooseDb.find({_id: req.params.id}, function(err, result){
				if(err){
					console.log(err);
					console.log('getmongooses function mongooses controller');
				} else {
					
						res.json(result);
					}
					
				})
			
			},
		updateMongoose: function(req, res){
			mongooseDb.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log(err);
				} else {
						result.name = req.body.name;
						result.weight = req.body.weight;
						result.color = req.body.color;
						result.save(function(err,result){
							if(err){
								console.log(err);
							} else{
								console.log(result);
								res.json(result);
							}
						}
					})
					
				}
			
			}
	}
})();