
 var menuApp =  angular.module('menuApp', [
        'ngRoute']);
     menuApp.config(function($routeProvider){
        $routeProvider
            .when("/",{
                templateUrl:'../menuPages/greetPage.html'

            })
            .when('/page1',{
                templateUrl:'../menuPages/page1.html'
            })
            .when('/page2',{
                templateUrl:'../menuPages/page2.html'
            })
            .otherwise({
                redirectTo:'/'
            })
    });