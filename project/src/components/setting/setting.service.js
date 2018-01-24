(function(){
	'use strict';

	function settingService(){
		var setting = {};

		setting.city = 'ville';
		setting.isCelsius = true;

		return setting;
	}

	settingService.$inject = [];

	angular.module('daproject').factory('settingService', settingService);

})();