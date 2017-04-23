(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = [ 'items'];
function ItemsController(items) {
  var itemDetail = this;
  itemDetail.items = items;
}

})();
