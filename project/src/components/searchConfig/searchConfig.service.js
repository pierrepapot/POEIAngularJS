(function(){
	'use strict';

	function searchConfig(){
		var search = {};

		search.ingredient = '';

		return search;
	}

	searchConfig.$inject = [];

	angular.module('daproject').factory('searchConfig', searchConfig);
})();