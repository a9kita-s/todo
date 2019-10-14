import { check } from 'meteor/check'
import {Meteor} from 'meteor/meteor'
import {Todos}  from '/imports/collection.coffee'

Meteor.methods
  'todo.insert': (text) ->
    check(text, String)
    Todos.insert
      text: text
      createdAt: new Date
      owner: Meteor.userId()
      username: Meteor.user().username
  
  'todo.remove': (todoId) ->
    check(todoId, String)
    Todos.remove(todoId)


  'todo.setChecked': ( todoId, setChecked )  ->
    check(todoId, String)
    check(setChecked, Boolean)
    Todos.update(todoId, { $set: { checked: setChecked } })


