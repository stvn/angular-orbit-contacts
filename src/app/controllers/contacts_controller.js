(function (App) {
  App.controller('ContactsController', function ($scope, $location, $routeParams, contactsService) {
    var contactId = $routeParams.id;

    if (contactId) {
      $scope.contact = contactsService.getContact(contactId);
    } else {
      $scope.contacts = contactsService.getContacts();  
    }
    
    $scope.show = function (contactId, $event) {
      $location.path('/contacts/' + contactId);
    };
  });
})(App);