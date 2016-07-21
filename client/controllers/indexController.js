myApp.controller('indexController', function($scope, mongooseFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	mongooseFactory.getMongooses(function(data){
		console.log("This is data (get data in indexController");
		$scope.mongooses = data;
	})

	$scope.createMongoose =function(){
		console.log("got to createMongoose", $scope.newMongoose);
		mongooseFactory.addMongoose($scope.newMongoose, function(mongoose){
			$scope.mongooses = mongoose;
		})
	}

	// console.log('I am able to load my indexController along with my index partial');

	// dummyFactory.addDummy({name: 'req.body.test', status: 'working'}, function(data){
	// 	console.log(data);
	// })
})