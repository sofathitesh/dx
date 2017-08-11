(function service(){
	angular
	.module("Services",[])
	.service("fetchDataRequest",function($http){
		this.PostUrl = function(request){
		 return $http({
				method: "post",
				url: 'json/dataGrid.json',
				data: JSON.stringify(request),
				async: false			
		})
		}
	})
})();