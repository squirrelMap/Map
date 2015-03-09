/**
 * Created by alexey on 01.03.15.
 */
'use strict';

angular
    .module('menuApp', ['ngRoute'])
    .config(function($routeProvider){
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
    })
.controller("getObjectCtrl", function($scope, $http){

    $http.post("gObjects.json").success(function(data, status,headers,config){
        $scope.gObjects = data;

    })
});