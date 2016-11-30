var myApp = angular.module('myApp', []);


myApp.controller('MainController',function($scope,$window, $http,$interval){

	var sid;
var url = "https://cse5335-sxy6902-project2.herokuapp.com";
//$window.alert(url);
	$scope.i=0;


$scope.getData = function(){
	
	$scope.checked = [];
	 $scope.counter = 0;

            var increaseCounter = function () {
         var uri = url+"/getData/"+$scope.counter;				
		$http.get(uri).success(function(response) {	
		   if($scope.counter%21==0){
		   $scope.checked = [];
		}
	    $scope.checked.push(JSON.parse(JSON.stringify(response)));
	    console.log(uri);	
      	});		
                $scope.counter++;
					console.log("fu"+$scope.counter);

            }

            $interval(increaseCounter, 500,100);   
}

});			
			
			//	}
	/*						
			//$window.alert("in function");
	while($scope.i!=3){

		 $interval(function () {	
	console.log("fu"+$scope.i);

	  },1000);
	  				$scope.i++;

	}	
/*	
	//			$scope.checked = [];

	/*	while($scope.i!=2){
  $timeout(function () {
      var uri = url+"/getData/"+$scope.i;
	$http.get(uri).success(function(response) {	
		
	 $scope.checked.push(JSON.parse(JSON.stringify(response)));
	console.log(uri);	
	});
	  },800);
	  $scope.i++;
}  */



	//var data = JSON.parse(JSON.stringify(response));
	
	//alert(data[1].id);
	//$window.alert(JSON.stringify(response));
		/*	 $scope.myHeader = "Hello World!";
  $timeout(function () {
      $scope.myHeader = data[1].id;
  }, 500);
  */
/*
		var d = "";
		var e = "";

		$scope.person = response;

		angular.forEach($scope.person,function(data){
			d += data.id; 
			e += data.CITY; 
			
			
		});
	*/