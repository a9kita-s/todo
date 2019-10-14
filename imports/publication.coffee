import {Todos}  from '/imports/collection.coffee'


if Meteor.isServer     #This code only runs on the server
  Meteor.publish 'todo', ->
    Todos.find({owner: Meteor.userId()})

  Meteor.publish 'users', ->
    Meteor.users.find({})