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



		function getcocktailDetails(cocktailId){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+cocktailDetail.idDrink+'')
			.then(function(response){
				console.log('success');
				cocktailDetail = response.drinks[0];
			})
			.catch(function(error){
				console.log('error');
				cocktailDetail = {};
			});
		}

		function getCocktail(){
			return $http.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+cocktail.search.ingredient+'')
			.then(function(response){
				console.log('success');
				cocktail.cocktailList = response.data.drinks;
				console.log(cocktail.cocktailList)
				cocktail.goTo('cocktailDetail')
			})
			.catch(function(error){
				console.log('error');
				cocktailList = [];
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