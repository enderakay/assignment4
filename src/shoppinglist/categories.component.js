(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesComponentController', CategoriesComponentController);


CategoriesComponentController.$inject = ['MenuDataService', 'items'];
function CategoriesComponentController(MenuDataService, items) {
  var mainList = this;
  mainList.items = items;
}

})();
