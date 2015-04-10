define([
    'angular',
    'angular-resource',
    'angular-route',
    '../js/controllers/menuModerator.js',
    '../js/services/menuModerator.js'

], function (angular) {
    'use strict';

    return angular.module('menuModeratorApp', [
        'ngResource',
        'menuModeratorApp.controllers',
        'menuModeratorApp.services',
        'ngRoute'


    ]);
});
