(function(){
	'use strict';

	function FinalCtrl(searchConfig, cocktailSearch){
		var vm = this;

		vm.ingredient = '';
		vm.search = searchConfig;
		vm.cocktail = cocktailSearch;
		vm.click = clickMe;

		function clickMe(){
			vm.search.ingredient = vm.ingredient;
			vm.cocktail.getCocktail();
			console.log(vm.ingredient);
		}
	}

	FinalCtrl.$inject = ['searchConfig', 'cocktailSearch'];

	angular.module('daproject').controller('FinalCtrl', FinalCtrl);
})();