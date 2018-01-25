(function(){
	'use strict';

	function DetailCtrl(){
		var vm = this;

		vm.detail = 'show';

		vm.status = statusB;

		function statusB(){
			if(vm.detail === 'show'){
				vm.detail = 'hide';
			} else{
				vm.detail = 'show';
			}
		}
	}

	DetailCtrl.$inject = [];

	angular.module('daproject').controller('DetailCtrl', DetailCtrl);
})();