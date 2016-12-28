'use strict';
(function(module) {
    var RunPrincipal = function($rootScope) {
        
        $rootScope.$on('$stateChangeStart', function() {

            var signedUserEmail = localStorage.getItem('signed-user-email');
            if(!signedUserEmail) signedUserEmail = sessionStorage.getItem('signed-user-email');

            if(!signedUserEmail){
                //remove principal
            	$rootScope.princpial = null;
            	return;
            } 
           console.log('Signed user email found...');

            if($rootScope.principal){
                console.log('Principal found... all done!');
            	return;
            }
			console.log('Principal not found, loading it to rootScope...');
    	});
    }

    RunPrincipal.$inject = ['$rootScope'];
    module.run(RunPrincipal);
})(angular.module('survivalApp'));