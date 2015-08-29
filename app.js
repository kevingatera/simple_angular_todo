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

myApp.controller('calController', ['$scope', '$http', function($scope, $http){
  $scope.ajaxCall = function(){
    $http.post('/someUrl', {msg:'hello word!'}).
    then(function(response) {
      console.log(response)
      // this callback will be called asynchronously
      // when the response is available
    }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  }

  // $scope.ajaxCall = function(){
  //   $http.get('https://www.googleapis.com/calendar/v3/users/me/calendarList').
  //   then(function(response) {
  //     console.log(response)
  //     // this callback will be called asynchronously
  //     // when the response is available
  //   }, function(response) {
  //     // called asynchronously if an error occurs
  //     // or server returns response with an error status.
  //   });
  // }
}])