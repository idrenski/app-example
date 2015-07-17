/**
 * Created by Iasen on 12/04/2015.
 */
app.controller("CartController", function ($scope) {
        $scope.bill = {};
        $scope.bill.discount = 0;

        $scope.items = [
            {title: 'Shoes', quantity: 2, price: 49.95},
            {title: 'Boots', quantity: 3, price: 69.95},
            {title: 'Socks', quantity: 12, price: 1.95}
        ];

        $scope.totalCart = function() {
            var total = 0;
            for (var i = 0, len = $scope.items.length; i < len; i++) {
                total = total + $scope.items[i].price * $scope.items[i].quantity;
            }
            return total;
        };

        $scope.subtotal = function() {
            return $scope.totalCart() - $scope.bill.discount;
        };

        function calculateDiscount(newValue, oldValue, scope) {
            $scope.bill.discount = newValue > 100 ? 10 : 0;
        };

        $scope.$watch($scope.totalCart, calculateDiscount);

        $scope.selectItem = function (row) {
            $scope.selectedRow = row;
        };
    }
);

