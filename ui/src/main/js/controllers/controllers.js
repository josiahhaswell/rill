define(['angular'], function (angular) {
    'use strict';

    console.log("Creating Rill controllers")
    var controllers = angular.module('rill.controllers', [])
        .controller('MainViewController', ['$scope', '$injector', function($scope, $injector) {
            require(['js/controllers/blog/MainViewController'], function(mainView) {
                console.log("\tMainViewController created")
                $injector.invoke(mainView, this, {'$scope': $scope});
                $scope.$apply();
            });
        }])
        .controller('AdminMainController',
                ['$scope', '$injector', function($scope, $injector) {
            require(['js/controllers/admin/AdminMainController'], function(mainView) {
                console.log("\tAdminMainController created")
                $injector.invoke(mainView, this, {'$scope': $scope});
                $scope.$apply();
            });

        }]);
    console.log("Rill controllers created");
    return controllers;

});