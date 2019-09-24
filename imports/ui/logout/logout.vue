<template>
<button @click="logout">Logout</button>
</template>

<script>

import { Meteor } from "meteor/meteor";
import { Accounts } from 'meteor/accounts-base'


export default {
  methods: {
    logout() {
      Meteor.logout()
  	}
  }
}
</script>