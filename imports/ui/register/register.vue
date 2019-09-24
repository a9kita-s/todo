<template>
<div>
  <form>
    <h3>Register</h3>
    <label>username</label>
    <input v-model="formData.username"/>
    <label>password</label>
    <input v-model="formData.password" />
    <button @submit.prevent="submitForm">Register</button>
  </form>
</div>
</template>

<script>
import { Meteor } from "meteor/meteor"
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
		  Accounts.createUser(this.formData , error => {
      	error ? console.log(error.reason) : console.log('user registered')
    	})
	  }
  }
}
</script>