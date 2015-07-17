/**
 * Created by Iasen on 13/04/2015.
 */
app.controller("RestaurantTableController", function ($scope) {
        $scope.directory = [
            {name: "The Handsome Heifer", cuisine: "BBQ"},
            {name: "Green Green Greens", cuisine: "Salads"},
            {name: "House of Fine Fish", cuisine: "Seafood"}
        ];

        $scope.selectRestaurant = function (row) {
            $scope.selectedRow = row;
        };
    }
);
