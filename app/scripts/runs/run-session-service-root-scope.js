'use strict';
(function(module){
	var RunSessionServiceRootScope = function($rootScope, SessionService){
		
		$rootScope.sessionService = SessionService;
	};
	
	RunSessionServiceRootScope.$inject = ['$rootScope','SessionService'];
	module.run(RunSessionServiceRootScope);
})(angular.module('survivalApp'));