<template lang="pug">
#app
   h1.header Todo List
   router-view
</template>

<script>
import { Todos } from '/imports/collection.coffee';
import { Meteor } from "meteor/meteor";
import Login from '/imports/ui/login/login.vue'
import List from '/imports/ui/list/list.vue'


export default {
  name: 'app',


  components :  {
        'todo-list' : List,
        'login' : Login,

   },
}
</script>

<style>

</style>