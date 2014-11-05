angular.module('practise', [])
.controller("HelloController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "World, AngularJS";
    })
.controller("HiController", function($scope) {
    $scope.hi = 'hi ';
     
    })
.controller("ByeController", function($scope) {
    $scope.bye = 'hi ';
     
    });


