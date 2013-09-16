/**
 * Created with IntelliJ IDEA.
 * User: josiahhaswell
 * Date: 9/15/13
 * Time: 3:39 PM
 * To change this template use File | Settings | File Templates.
 */


define([], function() {
    var service = ['$http', function($http){
        return {
            addBlog: function(text) {
                alert(text);
            }
        }

    }];
    console.log("Blogging service created");
    return service;
});
