<template>
  <div id="app">
    <div class="wrap">
      <div class="left fl">
        <leftnav @headCallBack="getTab"></leftnav>
      </div>
      <div class="content-wrap fr box-shadow">
        <shouye :is="currentTab" keep-alive ></shouye>
      </div>
      <div class="sidebr box-shadow">
        <h2>DalianSky</h2>
        <p>一些平时学习笔记以及收集到的好的文章</p>

        <div class="classify-content">
          <div>
            <a href="">
              <span>5</span>
              <span>日志</span>
            </a>
          </div>
          <div>
            <a href="">
              <span>9</span>
              <span>分类</span>
            </a>
          </div>
          <div>
            <a href="">
              <span>148</span>
              <span>标签</span>
            </a>
          </div>
        </div>
        <div class="RSS iconfont icon-guidangxiangmu">
          RSS
        </div>
        <div class="RSS-content">
          <div class="github fl iconfont icon-github">github</div>
          <div class="jianshu fl iconfont icon-shu">简书</div>
          <div class="QQ fl iconfont icon-QQ">QQ</div>
          <p class="clearfix"></p>
        </div>
        <div class="links">
          <h2>links</h2>
          <p><a href="">Athlonreg</a> </p>
          <p><a href="">国光</a></p>
          <p><a href="">简单</a></p>
        </div>
      </div>
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
  background-color: white;
}
.sidebr{
  position: absolute;
  float: left;
  margin-top: 315px;
  width: 240px;
  background: white;
  min-height: 350px;
  padding:15px 13px;
  box-sizing: border-box;
}
.sidebr h2{
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 14px;
}
.sidebr p{
  color:#999;
}
.classify-content{
  margin-top: 22px;
  display: flex;
  justify-content:center;
}
.classify-content div{
  width: 45px;
  cursor: pointer;
}
.classify-content div:nth-child(2){
  border-left: 1px solid rgb(238,238,238);
  border-right: 1px solid rgb(238,238,238);
}
.classify-content div p{
  color:#555;
  font-size: 16px;
  font-weight: bold;
}
.classify-content div a{
  color:#999;
  text-decoration:none;
}
.classify-content div a span:first-child{
  color: #555;
  font-weight: bold;
  font-size: 16px;
}
.classify-content div a:hover span:first-child{
  color: black;
}
.classify-content div a span{
  display: block;
  height: 25px !important;
  line-height: 25px;
}
.RSS{
  color:#fc6423;
  font-weight: 500;
  margin-top: 15px;
  border-bottom: 1px dotted #999;
  border-top: 1px dotted #999;
  height: 33px;
  line-height: 33px;
}
.RSS-content>div{
  width: 105px;
  margin-top: 15px;
  border-radius: 5px;
  color:rgb(85,85,85);
  cursor: pointer;
  font-size: 14px;
}
.RSS-content>div:hover{
  background-color: rgb(238,238,238);
  color:black;
}
.links{
  width: 100%;
  margin-top: 20px;
  border-top:1px dotted #999;
}
.links p a{
  color:#999;
}
</style>
