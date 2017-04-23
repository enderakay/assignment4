(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categories-component.template.html',
    controller: 'CategoriesComponentController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getItems();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as itemDetail',
    resolve: {
      items: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getCategoryItems($stateParams.itemId)
                .then(function (items) {
                  return items;
                });
            }]
    }
  });

}

})();
