(function (App) {
  'use strict';
  
  App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'ContactsController',
        templateUrl: 'app/views/contacts/index.html'
      })
      .when('/contacts/:id', {
        controller: 'ContactsController',
        templateUrl: 'app/views/contacts/show.html'
      })
      .otherwise({ redirectTo: '/'});
  });  

})(App);