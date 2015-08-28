var myApp = angular.module('ToDo', []);

myApp.controller('todoController', ['$scope', function($scope){
  $scope.todos = [
    {'title':'Test Item', 'done': false}
  ]
}])