(function(module){
		var ConfigStateHome = function($stateProvider){
		$stateProvider.state('home',{
			'url' : '/home',
			'templateUrl' : 'views/states/home-template.html'
			
		});

	};
	
	ConfigStateHome.$inject = ['$stateProvider'];
	module.config(ConfigStateHome);

})(angular.module('survivalApp'));