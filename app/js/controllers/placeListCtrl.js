/**
 * Created by alexey on 04.04.15.
 */

define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('placeListCtrl', ['$scope', 'Place',
        function($scope, Place) {
            $scope.places = Place.query();
           // $scope.orderProp = 'age';
        }]);
});