var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope) {
    $scope.student = {
        photo: "avatar.png",
        fullname: "Nguyễn văn Tèo",
        birthday: "20-01-1995",
        gender: "Nam",
        mark: "8.5"
    }
});