var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope) {
    $scope.photo = "avatar.png"
    $scope.fullname = "Nguyễn văn Tèo"
    $scope.birthday = "20-01-1995"
    $scope.gender = "Nam"
    $scope.mark = "8.5"

});