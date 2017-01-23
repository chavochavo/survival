"use strict"
(function(module){
	var SessionService = function($rootScope, DBService, $state){
		var service={};

		service.signIn = function(email, password){
			var db = DBService.getDB();
			var match = db.exec(
				"SELECT count(*) "+
			 	"FROM APP_USER au "+
			 	"WHERE au.EMAIL = '"+email+"'"+
			 	"AND au.PASSWORD ='"+password+"'");

			if(match[0].values[0]==0) return false;	
			console.log(email);
			$rootScope.principal = service.loadPrincipalByEmail(email);
			sessionStorage.setItem('signed-user-email', $rootScope.principal.email);
			return true;

		}; 

		service.loadPrincipalByEmail = function(email){
			console.log('Load Principal...');
			var db = DBService.getDB();

			var results = db.exec(
				"SELECT FULLNAME " +
				"FROM APP_USER "+ 
				"WHERE EMAIL = '"+email+"';");

			var principal = {
				'email' : email
				
			};
			console.log(principal);
			return principal;
		};

		return service;
	};
	SessionService.$inject=['$rootScope', 'DBService', '$state'];
	module.factory('SessionService',SessionService);
})(angular.module('survivalApp'));