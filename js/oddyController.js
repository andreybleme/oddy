var oddyApp = angular.module('oddyApp', []);

oddyApp.controller('OddyCtrl', function ($scope) {

	$scope.percentNeeded = function () {
		var percentneeded = (1/($scope.pot/$scope.call+1));
        return (percentneeded * 100).toFixed(2);
	};

	$scope.potOdds = function () {
		var odds = (($scope.outs*2)+1)/100;
        return (odds * 100).toFixed(2);
	};
});