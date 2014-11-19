var sampleAngular = angular.module('sampleAngular', ['ngRoute']);

sampleAngular.config(function($routeProvider){
	$routeProvider

	.when('/',{
		templateUrl : 'template.html',
		controller : 'mainController'
	})
	.when('/animals',{
	templateUrl : 'template.html',
	controller : 'animalsController'
	})
	.when('/fish',{
	templateUrl : 'template.html',
	controller : 'fishController'
	});
});


sampleAngular.controller('mainController', function($scope){
	$scope.message = "hello from the main controller";

	$scope.list = [
	{name: "Doug", skill: "coding"},
	{name: "Bob", skill: "reading"},
	{name: "John", skill: "cooking"}
	];
});

sampleAngular.controller('animalsController', function($scope){
	$scope.message = "hello from the animals controller";

	$scope.list = [
	{name: "dog", skill: "barking"},
	{name: "cat", skill: "reading"},
	{name: "camel", skill: "spitting"}
	];
});

sampleAngular.controller('fishController', function($scope){
	$scope.message = "hello from the fish controller";

	$scope.list = [
	{name: "trout", skill: "being a fish"},
	{name: "perch", skill: "perch out"},
	{name: "northern pike", skill: "assholes"}
	];
});