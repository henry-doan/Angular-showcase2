var logApp = angular.module('logApp', []);

logApp.controller('controller1', ['scope', function($scope){
	$scope.cats = [
	{name: 'piper', color: 'blonde'},
	{name: 'red', color: 'wine'}
	];
	
}]);