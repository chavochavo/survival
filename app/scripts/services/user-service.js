"use strict"
(function(module){
	var UserService = function(DBService){
		var service={};

		service.getAllUsers=function(){
			var db = DBService.getDB();
			var users = [];
			var result = db.exec("SELECT * FROM APP_USER WHERE EMAIL <> 'admin@admin' ;");
			if(!result.length)
				return users;
			for(rowIndex in result[0].values){
				var row = result[0].values[rowIndex];
				var user = {
						'email' : row[0],
						'fullname' :row[1],
						'age': row[2],
						'birthday': row[3],
						'county': row[4], 
						'password': row[5]
					};
				users.push(user);
			}
			return users;
		};
		return service;
	};
	UserService.$inject=['DBService'];
	module.factory('UserService',UserService);
})(angular.module('survivalApp'));