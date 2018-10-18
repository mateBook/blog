import Vue from 'vue'
import Router from 'vue-router'
import shouye from '@/components/shouye/shouye'
import about from '@/components/about/about'
import classify from '@/components/classify/classify'
import vlabel from '@/components/label/label'
import guian from '@/components/guian/guian'
import search from '@/components/search/search'

import labels from '@/components/label/labels/labels'
import labelDetail from '@/components/label/labelDetail/labelDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   {
     path:'/',
     redirect:'/shouye'
   },
   {
     path:'/shouye',
     component:shouye
   },
   {
     path:'/about',
     component:about
   },
   {
     path:'/classify',
     component:classify
   },
   {
     path:'/vlabel',
     component:vlabel,
     children:[
      {path:'/',redirect:'labels'},
      {path:'labels',component:labels},
      {path:'labelDetail',component:labelDetail},
     ]
   },
   {
     path:'/guian',
     component:guian
   },
   {
     path:'/search',
     component:search
   }
  ]
})
