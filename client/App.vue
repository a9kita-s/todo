<template>
<div id="app">
    <h1 class="header">Todo List</h1>
    <div class="container">
       <router-view v-if="user">
          <todo-list></todo-list>
       </router-view>
      <router-view v-else>
         <login></login>
      </router-view>
   </div>
</div>
</template>

<script>
import { Todos } from '/imports/collection.js';
import { Meteor } from "meteor/meteor";
import Login from '/imports/ui/login/login.vue'
import List from '/imports/ui/list/list.vue'


export default {
  name: 'app',


  components :  {
        'todo-list' : List,
        'login' : Login,

   },
    

   meteor: {

      user : function(){
         return Meteor.userId();
      },
      
   }
}
</script>

<style>

</style>