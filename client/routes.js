import { RouterFactory, nativeScrollBehavior } from 'meteor/akryum:vue-router2'

//components

import Login from '/imports/ui/login/login.vue'
import Register from '/imports/ui/register/register.vue'
import Logout from "/imports/ui/logout/logout.vue";
import List from '/imports/ui/list/list.vue'

const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
  })

RouterFactory.configure((factory => {
  // Simple routes
  factory.addRoutes([
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/',
      name: 'list',
      component : List,
    }
  ])
}), -1)

  export default routerFactory.create()