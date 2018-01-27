(function(){
	'use strict';

	function CocktailDetail($location, cocktailSearch){
		var vm = this;

		vm.cocktail = cocktailSearch;

		vm.goTo = goTo;
		function goTo(direction){
			if(direction === 'final'){
				$location.path('/final');
			}
		}
	}

	CocktailDetail.$inject = ['$location', 'cocktailSearch'];

	angular.module('daproject').controller('CocktailDetail', CocktailDetail);
})();