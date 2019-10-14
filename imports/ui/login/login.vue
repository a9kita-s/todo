<template lang="pug">
div
  form
    h3 Login
    label username
    input(v-model="formData.username")
    label password
    input(v-model="formData.password" type ="password")
    button(@click.prevent="submitForm") Login
    button(@click="$router.push({ path: '/register' })" class = "btn btn-primary") Register
</template>

<script lang="coffee">
import { Meteor } from "meteor/meteor"
import { Accounts } from 'meteor/accounts-base'
export default
  data: -> 
    formData:
      username: ''
      password: ''
  
  methods:
    submitForm: ->
      x = @formData.username
      console.log x
      Meteor.loginWithPassword(@formData.username, @formData.password, (error) => 
        if error
          console.log error
        else 
          @$router.push({ path: '/' })

      )
</script>

