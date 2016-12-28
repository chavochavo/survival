(function(module){
	var StateUserListingCtrl = function($scope,UserService){
    $scope.objProject = {}
    $scope.isSelectingPerson = false;
    $scope.Mac = true;
    $scope.isSelectingPerson = false;
    $scope.userslists = UserService.getAllUsers();

        $scope.userData = function(person){
        	$scope.isSelectingPerson = true;
        	$scope.selectingPerson = angular.copy(person);
        	$scope.selectingPerson.original = person;
        };
	};

    StateUserListingCtrl.$inject = ['$scope','UserService'];

	var ConfigStateUserListing = function($stateProvider){
		$stateProvider.state('userListing',{
			'templateUrl' : 'views/states/user-listing-template.html',
			'url' : '/userlist',
			'controller' : StateUserListingCtrl
		});
	};
ConfigStateUserListing.$inject=['$stateProvider'];
module.config(ConfigStateUserListing);
})(angular.module('survivalApp'));