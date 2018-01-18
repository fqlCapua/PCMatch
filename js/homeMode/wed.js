  var app = angular.module("Myapp", []);
  app.controller("filterUserCtr", function($scope,$http) {
    $http({
      method:'POST',
      dataType:"JSON",
      url:"JSON/main.json",
     }).then(function doneCallbacks(res){
  
        $scope.Userselectors = res.data[0].wed_filter;    
     },function failCallbacks(){

     })   
  })