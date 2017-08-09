(function factory(){
	angular
	.module("Factories",[])
	.factory("fetchData",function(fetchDataRequest){
		var fetchedData = function(request){
			return fetchDataRequest.PostUrl(request);
		}
		return fetchedData;
	})
})();