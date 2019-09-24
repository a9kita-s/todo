<template>
<div>
  <form >
    <h3>Login</h3>
    <label>username</label>
    <input v-model="formData.username" />
    <label>password</label>
    <input v-model="formData.password" />
    <button @submit.prevent="submitForm">Login</button>\
    <button @click="$router.push({ path: '/register' })" class = "btn btn-primary" >Register</button>
  </form>
</div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base'
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitForm : function(){
      var x=this.formdata.username;
      console.log(x);
      Meteor.loginWithPassword(this.formdata.username,this.formdata.password)
      
    }
    
    }
}
</script>