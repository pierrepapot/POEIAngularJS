(function(){
	'use strict';

	function DetailCtrl(){
		var vm = this;

		vm.detail = "show";

		vm.status = statusB;
		function statusB(){
			vm.detail = "hide";
		}
	}

	DetailCtrl.$inject = [];

	angular.module('daproject').controller('DetailCtrl', DetailCtrl);
})();