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

<script lang="coffee">
import { Meteor } from "meteor/meteor"
import { Accounts } from 'meteor/accounts-base'
export default
  data : ->
    formData:
      username: ''
      password: ''

  methods:
    submitForm : ->
      Accounts.createUser(this.formData , (error) =>
        if error
          console.log(error.reason)
        else
          @$router.push({path : '/login'})
      )
</script>