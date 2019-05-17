angular.module("testeTabela", ["ngTable"]);
angular.module("testeTabela").controller("tabelaController", function ($http, $scope, $filter, $q, NgTableParams) {

  var getDataOptions = (function () {
    $http
      .get('http://localhost:3412/clientes')
      .success(function (data1) {
        $scope.items = data1.Data;
        data = $scope.items

      })
      .error(function (response, status, headers, config) {
        console.log(`Aconteceu um problema`);
      });
  })();
  $scope.tableParams = new NgTableParams({ page: 1, count: 10 }, { data: $scope.items });
});
