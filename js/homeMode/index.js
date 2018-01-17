            var app=angular.module('iframeApp',['ngRoute'])
            app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                 .when('/',{templateUrl:'home.html'})              
                .when('/wedding',{templateUrl:'wedding.html'})
                .when('/estate',{templateUrl:'estate.html'})
                .when('/About',{templateUrl:'About.html'})
                .when('/domestic',{templateUrl:'domestic.html'})
                .otherwise({redirectTo:'/'});
            }]);


