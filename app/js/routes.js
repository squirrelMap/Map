/**
 * Created by alexey on 03.04.15.
 */

define(['./menuModeratorApp'], function (menuModeratorApp) {
    'use strict';
    return menuModeratorApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'greetPage.html',
            controller: 'placeListCtrl'

        });

        $routeProvider.when('/page1', {
            templateUrl: 'page1.html'

        });
        $routeProvider.when('/page2', {
            templateUrl: 'page2.html'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }]);
});