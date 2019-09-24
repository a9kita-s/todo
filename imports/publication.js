if (Meteor.isServer) {

    // This code only runs on the server
  
    Meteor.publish('todo', function todoPublication() {

      return Todos.find({});

  
    });
}