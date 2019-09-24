<template>
<div>
  
  <form >
    <h3>Login</h3>
    <label>username</label>
    <input v-model="formData.username" />
    <label>password</label>
    <input v-model="formData.password" />
    <button @click.prevent="submitForm">Login</button>\
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
      var x=this.formData.username;
      console.log(x);
      Meteor.loginWithPassword(this.formData.username,this.formData.password, error => {
      	error ? console.log(error.reason) : this.$router.push({path : '/'})
    	})
      
    }
    
  },
}
</script>