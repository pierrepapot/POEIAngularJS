(function(){
	'use strict';

	function MoreCtrl($location, meteoService){
		var vm = this;

		vm.meteo = meteoService;
		console.log(vm.meteo);

		vm.goTo = goTo;
		function goTo(direction){
			if(direction === 'exo04'){
				$location.path('/exo04');
			}
		}

	}

	MoreCtrl.$inject = ['$location', 'meteoService'];

	angular.module('daproject').controller('MoreCtrl', MoreCtrl);
})();