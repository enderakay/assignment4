(function () {
'use strict';

angular.module('MenuApp')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['ApiBasePath','$http', '$timeout']
function MenuDataService(ApiBasePath, $http, $timeout) {
  var service = this;

  // List of shopping items
  service.getItems = function () {
    return $http({
      method: "GET",
      url: ApiBasePath + "/categories.json"
    }).then(function(response){
        var items = [];
      response.data.forEach(function(item){
          items.push({name:item.name,category:item.short_name});
      });
      return items;
    });
  };

  //getCategoryItems
  service.getCategoryItems = function (itemId) {
    return $http({
      method: "GET",
      url: ApiBasePath + "/menu_items.json?category="+itemId
    }).then(function(response){
        var items = [];
      response.data.menu_items.forEach(function(item){
          items.push({name:item.name,category:item.short_name});
      });
      return items;
    });
  };
};
})();
