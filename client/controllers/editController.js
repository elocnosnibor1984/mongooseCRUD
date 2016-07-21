myApp.controller('editController', function($scope, $routeParams, mongooseFactory){
	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.
	var mongId = $routeParams.id;
	mongooseFactory.getMongoose(mongId, function(data){
		console.log("This is from the show Controller");
		$scope.editMongoose = data.data[0];
	})

	$scope.updateMongoose = function(data, function(data){
		$location.path('/');
	})

})