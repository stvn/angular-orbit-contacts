(function (App) {
  App.FIXTURES = {
    contacts: [
      {
        id: 1,
        firstName: 'Bruce',
        lastName: 'Banner',
        title: 'Scientist',
        email: 'bbanner@hulk.com',
        phones: ['555-555-1212', '414-444-1212'],
        address: {
          line1: '123 E. Street',
          city: 'Phoenix',
          state: 'Arizona',
          postalCode: 85022
        },

        relationshipType: 'Friend',
        avatar: 'hulk.jpg'
      },

      {
        id: 2,
        firstName: 'Tony',
        lastName: 'Stark',
        title: 'Militant Entrepreneur',
        email: 'tony@stark_industries.com',
        phones: ['555-555-1212'],
        address: {
          line1: '412 S. 12th Ave.',
          city: 'Los Angeles',
          state: 'California',
          postalCode: 92321
        },

        relationshipType: 'Friend',
        avatar: 'ironman.png'
      },  

      {
        id: 3,
        firstName: 'Steven',
        lastName: 'Rogers',
        title: 'Army Captain',
        email: 'cpt_rogers@military.gov',
        phones: ['555-555-1212'],
        address: {
          line1: '1712 W. Washington',
          city: 'San Francisco',
          state: 'California',
          postalCode: 94111
        },

        relationshipType: 'Friend',
        avatar: 'camerica.jpg'
      },  

      {
        id: 4,
        firstName: 'Clinton',
        middleName: 'Francis',
        lastName: 'Barton',
        title: 'Bounty Hunger',
        email: 'cbarton@hawkeye.com',
        phones: ['555-555-1212'],
        address: {
          line1: '12 Westing Dr',
          city: 'New York',
          state: 'New York',
          postalCode: 85022
        },

        relationshipType: 'Friend',
        avatar: 'hawkeye.jpg'
      },              

      {
        id: 5,
        firstName: 'Peter',
        middleName: 'Benjamin',
        lastName: 'Parker',
        title: 'Photo Journalist',
        email: 'pbparker@wgpcgr.com',
        phones: ['555-555-1212'],
        address: {
          line1: '2121 Willians Rd',
          city: 'Laurelsville',
          state: 'Alaska',
          postalCode: 99821
        },

        relationshipType: 'Friend',
        avatar: 'spiderman.png'
      }
    ]
  };
})(App);