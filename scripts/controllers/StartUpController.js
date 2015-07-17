/**
 * Created by Iasen on 12/04/2015.
 */
app.controller("StartUpController", function ($scope) {
        $scope.funding = {startingEstimate: null};

        $scope.computeNeeded = function () {
            $scope.funding.needed = $scope.funding.startingEstimate * 10;
        };

        $scope.$watch("funding.startingEstimate", "computeNeeded");

    }
);
