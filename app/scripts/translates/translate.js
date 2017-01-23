"use strict"
(function(module){
var Translate = function($translateProvider)
})(angular.module('survivalApp'));


app.config(["$translateProvider",function($translateProvider){
  
  var en_translations = {
    "language" : "Selected Language English",
    "greeting" : "Welcome Dinesh" 
  }
  
  var es_translations = {
    "language" : "Selected Language Spanish",
    "greeting" : "Bienvenida Dinesh"  
  }
  
  $translateProvider.translations('en',en_translations);
  
  $translateProvider.translations('es',es_translations);
  
  $translateProvider.preferredLanguage('en');
  
}];

app.controller("translateController" ,["$scope","$translate",function($scope,$translate){
  $scope.changeLanguage = function(lang){
   $translate.use(lang); 
  }
}]);