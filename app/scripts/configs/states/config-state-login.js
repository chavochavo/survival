(function(module){
	var LoginCtrl = function($scope, $state, SessionService  ){

		$scope.signIn = function(user){
			if(!SessionService.signIn($scope.user.email,$scope.user.password)){
				$scope.emailOrPasswordInvalid =  true;
				console.log("Not registered");
				return;
			};
			console.log("Registered");
			$state.go('home',{}, {'reload': true});
			return;
		};
	};
	LoginCtrl.$inject = ['$scope', '$state', 'SessionService'];

	var ConfigStateLogin = function($stateProvider) {
		$stateProvider.state('login',{
			'url' : '/login',
			'templateUrl' : 'views/states/login-template.html',
			'controller' : LoginCtrl
		}); 
	}
	ConfigStateLogin.$inject = ['$stateProvider'];
	module.config(ConfigStateLogin);
})(angular.module('survivalApp'));