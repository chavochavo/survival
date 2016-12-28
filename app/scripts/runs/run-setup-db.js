'use strict';
(function(module){

	var RunSetUpDB = function(DBService){
		DBService.loadDB();
	};
	RunSetUpDB.$inject = ['DBService'];
	module.run(RunSetUpDB);
})(angular.module('survivalApp'));
