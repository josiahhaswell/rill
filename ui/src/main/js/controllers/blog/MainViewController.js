/**
 * Created with IntelliJ IDEA.
 * User: josiahhaswell
 * Date: 9/15/13
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */
define([], function() {
    return ['$scope', '$http', 'blogs', function($scope, $http, blogs) {
        $scope.blogs = blogs.blogs;
    }];
});
