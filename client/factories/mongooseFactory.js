myApp.factory('mongooseFactory', function($http){

	var mongooses = [];

	var factory = {};

	factory.getMongooses = function(callback){
		$http.get('/mongooses').then(function(data){
			mongooses = data.data;
			callback(data.data);
		});
	}

	factory.getMongoose = function(mongId, callback){
		$http.get('/show/' + mongId).then(function(data){
			console.log("made it to the getMongoose factory");
			callback(data);
		});
	}

	factory.updateMongoose = function(info, callback){
		$http.post('/updateMongoose', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				// mongooses.push(data)
				callback(mongooses);
			}
		})
	}

	// the info parameter below is the the dummy that we're trying to add into our database

	// I added a test for myself below. I'm passing both a body element as well a params element
	// I use this as an initial test that I can pass information to my backend.
	// Check out your server console and you should see the body and the value we pass through 
	// the url. 
	factory.addMongoose = function(info, callback){
		console.log("made it to addMongoose factory");
		$http.post('/mongoose', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				mongooses.push(data)
				callback(mongooses);
			}
		})
	}

	return factory;
})