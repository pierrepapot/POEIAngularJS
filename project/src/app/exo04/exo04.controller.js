(function (){
	'use strict';

	function Exo04Ctrl(settingService, meteoService){
		var vm = this;
	
		vm.service = settingService;
		vm.meteo = meteoService;

		vm.input = 'meuh';

		vm.button = clickMe;
		function clickMe(){
			vm.service.city = vm.input ;
			vm.meteo.getWeather();
		}
	}

	Exo04Ctrl.$inject = ['settingService', 'meteoService'];

	angular.module('daproject').controller('Exo04Ctrl', Exo04Ctrl);


})();