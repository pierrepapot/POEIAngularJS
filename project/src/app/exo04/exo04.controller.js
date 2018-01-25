(function (){
	'use strict';

	function Exo04Ctrl(settingService, meteoService, $location){
		var vm = this;
	
		vm.service = settingService;
		vm.meteo = meteoService;

		vm.input = 'meuh';

		vm.button = clickMe;
		function clickMe(){
			vm.service.city = vm.input ;
			vm.meteo.getWeather();
		}

		vm.goTo = goTo;
		function goTo(direction){
			if(direction === 'more'){
				console.log('coucou');
				$location.path('/more');
			}
		}

	}

	Exo04Ctrl.$inject = ['settingService', 'meteoService', '$location'];

	angular.module('daproject').controller('Exo04Ctrl', Exo04Ctrl);


})();