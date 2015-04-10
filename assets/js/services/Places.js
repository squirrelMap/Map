/**
 * Created by alexey on 04.04.15.
 */
define(['./module'],function(services){
    'use strict';
    services.factory('Place', ['$resource',
        function($resource){
            return $resource('/js/services/gObjects.json', {}, {
                query: {method:'GET', params:{placeId:'places'}, isArray:true}
            });
        }]);
})
