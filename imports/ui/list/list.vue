<template>

   <div>
      <div v-if="user">
      <section>
         <div class="row1">
           <input v-model="inputField" v-on:keyup.enter="addTodo" class="mr-1" placeholder="Todo Item" />
           <button @click="addTodo" class="btn btn-primary">Add Todo</button>
           <lo></lo>
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
       </section>
      </div>
   </div>

</template>

<script>
import { Todos } from '/imports/collection.js';
import { Meteor } from "meteor/meteor";
import Logout from '/imports/ui/logout/logout.vue'



export default {

   components: {
      'lo' : Logout,

   },
   methods: {
     
    addTodo: function(text) {
      text = this.inputField;

      Meteor.call('todo.insert', text);
   },

   deleteTodo: function(todoId) {

      Meteor.call('todo.remove', todoId);
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
         'todo' : [],
      },
      
        todoList: function(){
           return Todos.find({})
        },
      user : function(){
         return Meteor.user();
      }
   }
}
</script>