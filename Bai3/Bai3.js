var app = angular.module("myapp", []);
app.controller("myCtrl", function ($scope) {
    $scope.student = [
        {
            photo: "avatar.png",
            fullname: "Nguyễn văn Tèo",
            birthday: "20-01-1995",
            gender: "Nam",
            mark: "8.5"
        }, {
            photo: "avatar2.png",
            fullname: "Phạm Thị Nở",
            birthday: "11-2-1985",
            gender: "Nữ",
            mark: "5.5"
        }, {
            photo: "avatar3.png",
            fullname: "Trần Ngọc Quang",
            birthday: "31-12-1980",
            gender: "Nam",
            mark: "7"
        }
    ];
});