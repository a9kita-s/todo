<template lang="pug">
div
  
  form
    h3 Login
    label username
    input(v-model="formData.username")
    label password
    input(v-model="formData.password")
    button(@click.prevent="submitForm") Login
    button(@click="$router.push({ path: '/register' })" class = "btn btn-primary") Register
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