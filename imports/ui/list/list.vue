<template lang="pug">
.row1
   h3 Hello
   input.mr-1(v-model="inputField" v-on:keyup.enter="addTodo" placeholder="Todo Item" @focus="magic_flag = true" @blur="magic_flag = false" )
   button.btn-primary(@click="addTodo") Add Todo
   lo
   ul.list-group
      li.list(v-for="todo in todoList" :key="todo._id")
         input(type="checkbox" v-on:change="toggle(todo._id)" class="col-sm-1 border border-danger")
         del(v-if="todo.checked" class="col-sm-8")
            h5 {{ todo.text}}
         span(v-else class="col-sm-8")
            h5 {{ todo.text}}
         span(@click="deleteTodo(todo._id)" class="offset-sm-1 col-sm-2 delete text-right") X
</template>


<script lang="coffee">
import { Todos } from '/imports/collection.coffee'
import { Meteor } from "meteor/meteor"
import Logout from '/imports/ui/logout/logout.vue'
import Login from '/imports/ui/login/login.vue'


export default
  mounted : ->
    if Meteor.userId()
      @$router.push({path : '/'})
    else
      @$router.push({path : '/login'})
  components:
    'lo' : Logout
  methods:
   addTodo: (text) ->
      text = @inputField
      Meteor.call('todo.insert', text)
      @inputField = ''
   deleteTodo: (todoId) ->
      Meteor.call('todo.remove', todoId)
   toggle: (todoId) ->
      Meteor.call('todo.setChecked', todoId, !@checked)
      #todo.complete = !todo.complete
  data : ->
     inputField: ''
  meteor:
    $subscribe:
      'todo' : []
      'users' : []
    todoList: ->
      Todos.find({})
    user : ->
      Meteor.userId()
</script>