import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

Todos = new Mongo.Collection("todo");

module.exports = { Todos }

/*TodoSchema = new SimpleSchema({
  name: String,
  isCompleted: {
      type: Boolean,
      defaultValue: false,
  }
}).validate({
  name: 2,
});

//import SimpleSchema from 'simpl-schema';


Todo.attachSchema(TodoSchema);*/