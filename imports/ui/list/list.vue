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

<script>
import { Todos } from '/imports/collection.js';
import { Meteor } from "meteor/meteor";
import Logout from '/imports/ui/logout/logout.vue'
import Login from '/imports/ui/login/login.vue'
export default {
   mounted : function() {
      if (Meteor.userId()) {
         return this.$router.push({path : '/'});
      }
      else {
         return this.$router.push({path : '/login'});
      }
      
   },
   components: {
      'lo' : Logout,
   },
   methods: {
     
    addTodo: function(text) {
      text = this.inputField;
      Meteor.call('todo.insert', text);
      this.inputField = '';
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
         'users' : [],
      },
      
      todoList: function(){
           return Todos.find({})
        },
      
      user : function(){
         return Meteor.userId();
      },
   }
}
</script>