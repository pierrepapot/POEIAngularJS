(function(){
	'use strict';

	function Exo03Ctrl(){
		var vm = this;
		vm.test = 'coucou';

		vm.films = [
			{name: 'Fast and Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/AkSMd8AXSpA1L1SbBPc2AfVJfmE.jpg', year: 2001},
			{name: '2 Fast 2 Furious', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/u1Snfl40rXmAJNiMyZUczUyFVuf.jpg', year: 2003},
			{name: 'Fast & Furious: Tokyo Drift', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/4ceW7kWPAc2uFG5WzYDbP8Od3gw.jpg', year: 2006}
		];
		vm.selectImg = select;

		function select(index){
			var selectedFilm = vm.films[index];
			// initialisé une variable pr la comparaison pr ng-class
			vm.name = selectedFilm.name;
			vm.date = selectedFilm.year;
			return selectedFilm;
		}
	}

	Exo03Ctrl.$inject = [];

	angular.module('daproject').controller('Exo03Ctrl', Exo03Ctrl);

})();