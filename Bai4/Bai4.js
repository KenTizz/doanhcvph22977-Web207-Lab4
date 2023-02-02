var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope) {
    $scope.calculate = function () {
        var a = parseFloat($scope.width);
        var b = parseFloat($scope.length);
        $scope.dientich = a * b;
        $scope.chuvi = (a + b) * 2;

    }
});