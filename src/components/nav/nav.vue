<template>
  <div class="box-shadow left-content">
    <div class="left_nav" >
      <i class="iconfont icon-caidan menu" @click='menuClick()'></i>
      <div class="nice_name">黑果小兵的部落阁</div>
      <div class="nice_name_en">Daliansky的空中楼阁</div>
    </div>
    <!-- 面包屑导航  -->
   
     <ul class="navigation" :class="{ on : isShow }" @click="changeTitle">
      <router-link v-for="(item,index) in navigation" :to="item.tabName"> 
      <li  :class="item.active" @click="handleClick(item.tabName,index)">
        <i :class="item.className" class="iconfont"></i>
        {{ item.name }}
      </li>
      </router-link>
     </ul>
     <ul class="outer"  :class="{ hit : isShow }">
       <li @click="showMaster()">
         <i class="iconfont icon-sousuo"></i>
          搜索
       </li>
     </ul>
    <!-- search弹窗 -->
    <div class="master" v-if="isShowMaster" @click="hideMaster()">
      <div class="master_content" @click.stop>
        <div class="master_content_head">
          <span class="iconfont icon-sousuo"></span>
          <div>
              <input type="text" placeholder="搜索...">
          </div>
          <span class="iconfont icon-error btn_close" @click="hideMaster()"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: [
        {
          name: "首页",
          className: "icon-shouye",
          active: "active",
          tabName: "/shouye"
        },
        {
          name: "关于",
          className: "icon-guanyuwomen",
          tabName: "/about",
          active: ""
        },
        {
          name: "标签",
          className: "icon-biaoqian",
          tabName: "/vlabel",
          active: ""
        },
        {
          name: "分类",
          className: "icon-leimupinleifenleileibie2",
          tabName: "/classify",
          active: ""
        },
        {
          name: "归案",
          className: "icon-guidangxiangmu",
          tabName: "/guian",
          active: ""
        }
        // {
        //   name: "搜索",
        //   className: "icon-sousuo",
        //   tabName: "/search",
        //   active:''
        // }
      ],
      isShow: false,
      isFixed: false,
      isShowMaster: false
    };
  },
  methods: {
    handleClick(i, index) {
      this.navigation.map(function(item) {
        item.active = "";
      });
      this.navigation[index].active = "active";
      this.$emit("headCallBack", i);
    },
    menuClick() {
      this.isShow = !this.isShow;
    },
    changeTitle() {
      this.bus.$emit("toChangeTitle", "首页");
    },
    showMaster() {
      this.isShowMaster = true;
    },
    hideMaster() {
      this.isShowMaster = false;
    }
  }
};
</script>

<style>
.left-content {
  background-color: #fff;
  padding-bottom: 20px;
}
.left_nav {
  width: 200px;
  margin-right: 12px;
  background-color: rgb(146, 43, 43);
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  color: #fff;
  background: #222;
  margin: 0;
  text-align: center;
  position: relative;
}
.menu {
  position: absolute;
  margin-top: 2px;
  left: 30px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
  display: none;
}
.nice_name {
  width: 100%;
  text-align: center;
  height: 36px;
  line-height: 36px;
  font-size: 20px;
}
.nice_name_en {
  font-size: 13px;
  color: #ddd;
  text-align: center;
  margin-top: 20px;
}
.outer {
  height: 40px ;
}
.navigation {
  /* padding-top: 20px; */
  text-align: left;
  font-size: 13px;
  text-align: center;
  transition: all 0.5s;
  height: 0px;
  overflow: hidden;
}
.navigation a {
  text-decoration: none;
}
.navigation li,.outer li {
  font-size: 13px;
  height: 40px;
  line-height: 40px;
  padding-left: 23px;
  padding-right: 23px;
  box-sizing: border-box;
  text-align: left;
  position: relative;
  width: 98% !important;
  margin: 0 auto;
  color: #555;
  cursor: pointer;
}
.navigation li:hover {
  background-color: rgb(249, 249, 249);
  color: black;
}
.outer li:hover{
  background-color: rgb(249, 249, 249);
  color: black;
}
.navigation li i,.outer li i {
  font-size: 13px;
  margin-right: 10px;
  background-color: white;
}
.active {
  background-color: #f9f9f9;
}
.navigation li.active::after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-top: -3px;
  right: 15px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #bbb;
}
.on {
  opacity: 1 !important;
  height: 200px !important;
  overflow: hidden !important;
  padding-top: 0 !important;
}
.hit{
  opacity: 1 !important;
  height: 40px !important;
  overflow: hidden !important;
  padding-top: 0 !important;
}
.master {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2080;
  background-color: rgba(0, 0, 0, 0.3);
}
.master_content {
  position: fixed;
  top: 10%;
  left: 50%;
  margin-left: -350px;
  width: 700px;
  height: 80%;
  padding: 0;
  background: #fff;
  color: #333;
  z-index: 9999;
  border-radius: 5px;
}
.master_content_head {
  padding: 5px;
  height: 36px;
  background: #f5f5f5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-align: left;
  display: flex;
}
.master_content_head span {
  display: inline-block;
  font-size: 22px;
  color: #999;
  height: 36px;
  width: 18px;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  top:-3px;
}
.btn_close {
  border-left: 1px solid #eee;
  cursor: pointer;
  font-size: 18px !important;
  top: 0 !important;
}
.master_content_head div {
  display: inline-block;
  width: calc(100% - 90px);
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border: none;
  background: transparent;
  margin-bottom: 50px;
}
.master_content_head div input {
  padding: 8px 0;
  height: 20px;
  display: block;
  width: 100%;
  outline: 0;
  border: none;
  background: 0 0;
  vertical-align: middle;
  font-size: 14px;
  -webkit-writing-mode: horizontal-tb !important;
}
</style>
