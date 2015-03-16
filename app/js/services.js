/**
 * Created by alexey on 16.03.15.
 */
var placesServices = angular.module('placesServices', ['ngResource']);
placesServices.factory('Place', ['$resource',
function($resource) {
    return $resource('../tmpjson/:gObjects', {}, {
        query: {method: 'GET', params: {placeId: 'places'}, isArray: true}

    });

}]);