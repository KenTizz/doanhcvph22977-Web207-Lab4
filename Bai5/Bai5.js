var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope) {
    $scope.save = function () {
        var a = parseFloat($scope.student.mark);
        if (a < 5) {
            $scope.student.grade = "Rớt";
        } else {
            $scope.student.grade = "Đậu";
        }

    }
});