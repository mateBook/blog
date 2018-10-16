import Vue from 'vue'
import Router from 'vue-router'
// import header from '@/components/header/header'
import labelDetail from '@/components/labelDetail/labelDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/labelDetail',
      name: 'labelDetail',
      component: labelDetail
    },
    {
      path: '/labels',
      name: 'labels',
      // component: labels
    }
  ]
})
