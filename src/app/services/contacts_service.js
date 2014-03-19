(function (App) {
  App.service('contactsService', function () {
    return {
      getContacts: function () {
        return App.FIXTURES.contacts;
      },

      getContact: function (id) {
        var contacts = App.FIXTURES.contacts.filter(function (contact) {
          return contact.id === parseInt(id);
        });

        return contacts.length > 0 ? contacts[0] : null;
      }
    };
  });
})(App);