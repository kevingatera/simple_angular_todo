var myApp = angular.module('ToDo', []);

myApp.controller('todoController', ['$scope', function($scope){
  $scope.todos = [
    {'title':'Test Item', 'done': false}
  ];
  $scope.addItem = function(){
    $scope.todos.push({
      "title":$scope.newItem,
      "done":false
    })
    // clear form after submission
    $scope.newItem = "";
  }
  $scope.clearComplete = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.done
    })
  };
}]);