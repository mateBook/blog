<template>
  <div id="app">
    <div class="wrap">
      <div class="left fl">
        <leftnav @headCallBack="getTab"></leftnav>
      </div>
      <transition name="fade">
        <div class="content-wrap fr" ref='contentRef'>
          <shouye :is="currentTab" keep-alive class="animate"></shouye>
        </div>
      </transition>
      <div class="sidebr box-shadow animateOut" ref='sidebrRef'>
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
import guian from '@/components/guian/guian'
import search from '@/components/search/search'

export default {
  name: 'App',
  components:{
    leftnav,
    shouye,
    about,
    classify,
    search,
    guian
  },
  data() {
    return {
      currentTab: 'shouye',
      show:true
    }
  },
  methods:{
    getTab(i){
      this.currentTab = i;
    }
  },
  mounted () {
        var _this = this;
        this.bus.$on('toChangeTitle', function (title) {
            console.log('APP'+title)

            _this.$refs.contentRef.classList.remove("animate")
            setTimeout(function(){
               _this.$refs.contentRef.classList.add('animate')
            },0)
            

             _this.$refs.sidebrRef.classList.remove("animateOut")
            setTimeout(function(){
               _this.$refs.sidebrRef.classList.add('animateOut')
            },0)
            //console.log(_this.$refs.sidebrRef.classList.add('animate'))
            
        })
    },
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
  /* background-color: white; */
  margin-left: 10px;
  /* margin-right: 10px; */
  box-sizing: border-box;
}
.sidebr{
  position: absolute;
  float: left;
  margin-top: 355px;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@keyframes fadeinT{
    0%{opacity:0;transform:translateY(-20px);}
    100%{opacity:1;transform:translateY(0);}
}
@keyframes fadeouT{
  0%{opacity:0;transform:translateY(20px);}
  100%{opacity:1;transform:translateY(0);}
}
.animate{
  animation: fadeinT 2s;
}
.animateOut{
  animation: fadeouT 2s;
}
</style>
