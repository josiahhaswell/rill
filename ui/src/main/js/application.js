define([
    'angular',
    'angularRoute',
    'js/controllers/controllers'
], function (angular, controllers, routes) {
    'use strict';

    return angular.module('rill', [
        'ngRoute',
        'rill.services',
        'rill.controllers'
    ]);
});