/**
 * Created with IntelliJ IDEA.
 * User: josiahhaswell
 * Date: 9/15/13
 * Time: 3:45 PM
 * To change this template use File | Settings | File Templates.
 */
define(['angular'], function (angular) {
    'use strict';

    console.log("Creating Rill services")
    var services = angular.module('rill.services', []);

    services.value('blogs', {
            blogs :[],
            addBlog:function(f) {
                this.blogs.push(f);
            }
    });




    console.log("Rill services created");
    return services;

});
