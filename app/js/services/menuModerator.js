/**
 * Created by alexey on 16.03.15.
 */
menuApp.factory('Places', ['$http',
    function($http){

    var places = [];
    function getPlaces() {
        $http.get('gObjects.json').success(function(data) {
            places = data;
        })};
    getPlaces();


    var service = {};
    service.getAll = function() {
        return places;
    }

    return service;
}])