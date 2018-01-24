(function(){
	'use strict';

	function meteoService($http, settingService){
		var meteo = {};

		meteo.setting = settingService;
		meteo.meteoListe = [];
		meteo.getWeather = getMeteo;

		function getMeteo(city){
			return $http.get('http://api.openweathermap.org/data/2.5/forecast?q='+meteo.setting.city+'&APPID=19a4914491156205b00ef4fe11e1207d&units=metric')
			.then(function(response){
				console.log('success');
				meteo.meteoListe = response.data.list;
			})
			.catch(function(error){
				console.log('error');
				meteo.meteoListe = [];
			});
		}

		return meteo;
	}

	meteoService.$inject = ['$http', 'settingService'];

	angular.module('daproject').factory('meteoService', meteoService);

})();