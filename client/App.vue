<template>
<div id="app">
    <h1 class="header">Todo List</h1>
    <div class="container">
       <router-view></router-view>
      <div v-if='user'>
         <todo-list></todo-list>
      </div>
      <div v-if = '!user'>
         <login></login>
       </div>
   
       
      <!-- <section>
         <div class="row1">
           <input v-model="inputField" v-on:keyup.enter="addTodo" class="mr-1" placeholder="Todo Item" />
           <button @click="addTodo" class="btn btn-primary">Add Todo</button>
        </div>
      </section>

       <section class="container">
          <div class="row2">
                <ul class="list-group">
                   <li class="list" v-for="todo in todoList" :key="todo._id">
                      <div class="row align-items-center">
                        <input type="checkbox" v-on:change="toggle(todo._id)" class="col-sm-1 border border-danger">
                        <del v-if="todo.complete" class="col-sm-8">
                           <h5>{{ todo.text}}</h5>
                        </del>
                        <span v-else class="col-sm-8">
                           <h5>{{ todo.text}}</h5>
                        </span>
                        <span @click="deleteTodo(todo._id)" class="offset-sm-1 col-sm-2 delete text-right">X</span>
                      </div>
                   </li>
                </ul>
          </div>
       </section> -->

  </div>
</div>
</template>

<script>
import { Todos } from '/imports/collection.js';
import { Meteor } from "meteor/meteor";
import Logout from '/imports/ui/logout/logout.vue'
import Login from '/imports/ui/login/login.vue'
import Register from '/imports/ui/register/register.vue'
import List from '/imports/ui/list/list.vue'


export default {
  name: 'app',


  components :  {
        'logout' : Logout,
        'todo-list' : List,
        'login' : Login,
        'register' : Register

    },
    
  methods: {
     
    addTodo: function(text) {
      text = this.inputField;

      Meteor.call('todo.insert', text);
      /*this.todoList.push({name: todo, complete: false});
      this.inputField = '';
      console.log(this.todoList);*/
   },

   deleteTodo: function(todoId) {

      Meteor.call('todo.remove', todoId);
      //var index = this.todoList.indexOf(todo);
      //this.todoList.splice(index, 1);
      //console.log(this.todoList);
   },
   toggle: function(todoId) {
      Meteor.call('todo.setChecked', todoId, !this.checked);
      //todo.complete = !todo.complete;
   }
  },
   
  data () {
    return {
      inputField: '',
      
    }
  },
   meteor: {
      $subscribe: {
         'todo' : []
      },
      
        todoList: function(){
           return Todos.find({})
        }
      }
}
</script>

<style>

</style>