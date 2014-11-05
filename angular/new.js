/*angular.module('practise', [])
.controller('MyCtrl', function($scope) {
  $scope.message = 'jassi';
});*/
angular.module('practise.my', []).
controller('MyCtrl', function($scope , numberValue , stringValue,objectValue) {
  $scope.message = 'jassi';
    console.log(numberValue);
    console.log(stringValue);
    console.log(objectValue);
});