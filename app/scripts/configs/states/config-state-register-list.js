(function(module){
	var StateUserListingCtrl = function($scope,UserService){
        $scope.cm;
        $scope.objProject = {}
        $scope.isSelectingPerson = false;
        $scope.Mac = true;
        $scope.userslists = UserService.getAllUsers();

        $scope.userData = function(person){
            $scope.isSelectingPerson = true;
            $scope.selectingPerson = angular.copy(person);
            $scope.selectingPerson.original = person;
        };

        $scope.close = function(){
            $scope.isSelectingPerson = false;
        }
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