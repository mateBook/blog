<template>
  <div id="app">
    <div class="wrap">
      <div class="left fl">
        <leftnav @headCallBack="getTab"></leftnav>
      </div>
      <div class="content-wrap fr box-shadow">
        <shouye :is="currentTab" keep-alive ></shouye>
      </div>
      <div class="sidebr box-shadow"></div>
    </div>
  </div>
</template>

<script>
import leftnav from '@/components/nav/nav'
import shouye from '@/components/shouye/shouye'
import about from '@/components/about/about'
import classify from '@/components/classify/classify'
import search from '@/components/search/search'

export default {
  name: 'App',
  components:{
    leftnav,
    shouye,
    about,
    classify,
    search
  },
  data() {
    return {
      currentTab: 'shouye'
    }
  },
  methods:{
    getTab(i){
      console.log(i)
      this.currentTab = i
    }
  }
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/font/iconfont.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.wrap{
  width: 75%;
  margin: 10px auto 0;
  background-color: pink;
  position:relative;
}
.content-wrap{
  width:calc(100% - 252px);
  min-height: 1000px;
  background-color: aqua;
}
.sidebr{
  position: absolute;
  float: left;
  margin-top: 450px;
  width: 240px;
  background: gold;
  min-height: 350px;
}
</style>
