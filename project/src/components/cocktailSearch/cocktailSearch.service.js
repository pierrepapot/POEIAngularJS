(function(){
	'use strict';

	function cocktailSearch(searchConfig, $http, $location){
		var cocktail = {};

		cocktail.cocktailList = [];
		cocktail.search = searchConfig;
		cocktail.getCocktail = getCocktail;
		cocktail.cocktailDetail = {};

		cocktail.get = getcocktailDetails;
		
		cocktail.goTo = goTo;


		function getCocktail(){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+cocktail.search.ingredient)
			.then(function(response){
				console.log('success');
				cocktail.cocktailList = response.data.drinks;
				console.log(cocktail.cocktailList);
			})
			.catch(function(error){
				console.log('error cocktail');
				cocktail.cocktailList = [];
			});
		}

		function getcocktailDetails(cocktailId){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailId)
			.then(function(response){
				console.log('success');
				console.log(response);

				cocktail.cocktailDetail = response.data.drinks[0];
				cocktail.goTo('cocktailDetail');
			})
			.catch(function(error){
				console.log('error detail');
				cocktail.cocktailDetail = {};
			});
		}

		function goTo(direction){
			if(direction === 'cocktailDetail'){
				$location.path('/cocktailDetail');
			}
		}

		return cocktail;
	}

	cocktailSearch.$inject = ['searchConfig', '$http', '$location'];

	angular.module('daproject').factory('cocktailSearch', cocktailSearch);
})();