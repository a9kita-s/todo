<template lang="pug">
div
  form
    h3 Register
    label username
    input(v-model="formData.username")
    label password
    input(v-model="formData.password")
    button(@click.prevent="submitForm") Register
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
      	error ? console.log(error.reason) : this.$router.push({path : '/login'})
    	})
	  }
  }
}
</script>