 
angular.module('practise.Ctrl', []).
controller('Ctrl', function($scope , numberValue , stringValue,objectValue) {
  $scope.message = 'jassi';
    console.log(numberValue);
    console.log(stringValue);
    console.log(objectValue);
});