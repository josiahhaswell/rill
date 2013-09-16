/**
 * Created with IntelliJ IDEA.
 * User: josiahhaswell
 * Date: 9/15/13
 * Time: 12:42 PM
 * To change this template use File | Settings | File Templates.
 */


require.config({
    baseUrl: './',
    paths: {
        jquery: './js/lib/jquery/jquery',
        angular: './js/lib/angular/angular',
        angularRoute: './js/lib/angular/routes',
        bootstrap: './resources/lib/bootstrap/3.0.0/js/bootstrap',
        pnotify: './js/lib/jquery/plugins/pnotify'
    },
    shim: {
        'jquery': {'exports': 'jquery'},
        'angular' : {'exports' : 'angular'},
        'angularRoute': ['angular'],
        'bootstrap': ['jquery'],
        'pnotify':['jquery']
    },
    priority: [
        "jquery",
        "angular",
        "bootstrap"

    ]
});
window.name = "NG_DEFER_BOOTSTRAP!";

require([
    'angular',
    'jquery',
    'bootstrap',
    'pnotify',
    'js/application',
    'js/routes',
    'js/controllers/controllers',
    'js/services/services',
], function(angular, $, bootstrap, pnotify, app, routes, controllers, services) {
    'use strict';
    console.log("Bootstrapping Rill");

    $(function() {
        var $html = $("#rill")
        console.log("Attaching Angular to #rill" );
        if(!$html) {
            throw "Failed to create Rill.  Element was not found";
        }
        $html.attr('ng-app', "");
        angular.bootstrap($html, [app['name']]);
    });
    console.log("Rill bootstrap successful");
});
