define(['angular', 'js/application'], function(angular, app) {
    'use strict';

    console.log("Configuring routes...");
    var routes = app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'html/views/blog/MainView.html',
            controller: 'MainViewController'
        })
        .when("/admin", {
                templateUrl: 'html/views/admin/AdminMainView.html',
                controller: 'AdminMainController'

        })
        .otherwise({redirectTo:'/main'});
    }]);
    console.log("Done configuring routes");

    return routes;

});
