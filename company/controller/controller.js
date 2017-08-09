(function a(){
	angular
	.module("companyApp",["Factories","Services","dx"])
	.controller("compnayController",function($scope,fetchData){
		var data = fetchData("");
	})
})();