<template lang="pug">
  button(@click="logout") Logout
</template>

<script lang="coffee">

import { Meteor } from "meteor/meteor"
import { Accounts } from 'meteor/accounts-base'


export default
  methods:
    logout: ->
      Meteor.logout((error) =>
        if error
          console.log(error.reason)
        else
          @$router.push({path : '/login'})
      )
</script>