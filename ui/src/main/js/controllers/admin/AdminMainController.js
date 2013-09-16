/**
 * Created with IntelliJ IDEA.
 * User: josiahhaswell
 * Date: 9/15/13
 * Time: 2:32 PM
 * To change this template use File | Settings | File Templates.
 */
define([], function() {
    return ['$scope', '$http', 'blogs',  function($scope, $http, blogs) {

        $scope.title = "";
        $scope.body = "";
        $scope.submit = function() {
            $.pnotify({
                text:"Successfully added " + $scope.title,
                type:'info'
            });
            blogs.addBlog({
                title:$scope.title,
                body:$scope.body
            });
            $scope.clear();
        }

        $scope.clear = function() {

            $scope.title = "";
            $scope.body = "";
        }


    }];
});
