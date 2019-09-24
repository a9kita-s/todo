import { check } from 'meteor/check';

Meteor.methods({

    'todo.insert'(text) {
  
      check(text, String);


      Todos.insert({
  
        text,
  
        createdAt: new Date(),

        owner: Meteor.userId(),

      username: Meteor.user().username,



  
      });
  
    },
  
    'todo.remove'(todoId) {

      console.log(todoId + "##########################3");
  
      check(todoId, String);
  
      Todos.remove(todoId);
  
    },
  
    'todo.setChecked'(todoId, setChecked) {
  
      check(todoId, String);
  
      check(setChecked, Boolean);
  
      Todos.update(todoId, { $set: { checked: setChecked } });
  
    },

  
  });