/**
 * Created by alexey on 16.03.15.
 */
var placesControllers = angular.module('placesControllers', []);

placesControllers.controller('PlaceListCtrl', ['$scope', 'Place',
   function($scope, Place){
       $scope.places = Place.query();
   }]);
