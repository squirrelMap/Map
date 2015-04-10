/**
 * Created by alexey on 03.04.15.
 */
define([
    'require',
    'angular',
    'menuModeratorApp',
    'routes'


], function (require, ng) {
    'use strict';



    require(['domReady!'], function (document) {
        ng.bootstrap(document, ['menuModeratorApp']);
    });
});
