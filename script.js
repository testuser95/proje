angular.module('myapp', [
	'ngRoute',
	'myapp.view1'
]).

config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/view1'});
}])