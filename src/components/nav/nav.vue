<template>
  <div class="box-shadow left-content">
    <div class="left_nav">
      <i class="iconfont icon-caidan menu" @click='menuClick()'></i>
      <div class="nice_name">黑果小兵的部落阁</div>
      <div class="nice_name_en">Daliansky的空中楼阁</div>
    </div>
    <!-- 面包屑导航  -->
   
     <ul class="navigation" :class="{ on : isShow }"> 
      <li v-for="(item,index) in navigation" :class="item.active" @click="handleClick(item.tabName)">
        <i :class="item.className" class="iconfont"></i>
        {{ item.name }}
      </li>
     </ul>
    
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
          tabName: "shouye"
        },
        {
          name: "关于",
          className: "icon-guanyuwomen",
          tabName: "about"
        },
        {
          name: "分类",
          className: "icon-leimupinleifenleileibie2",
          tabName: "classify"
        },
        // {
        //   name: "归案",
        //   className: "icon-guidangxiangmu"
        // },
        {
          name: "搜索",
          className: "icon-sousuo",
          tabName: "search"
        }
      ],
      isShow: true
    };
  },
  methods: {
    handleClick(i) {
      this.$emit("headCallBack", i);
    },
    menuClick() {
      this.isShow = !this.isShow;
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
  width: 240px;
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
.navigation {
  /* padding-top: 20px; */
  text-align: left;
  font-size: 13px;
  text-align: center;
  transition:all 0.5s;
  height: 0px;
  overflow: hidden;
}
.navigation li {
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
}
.navigation li i {
  font-size: 13px;
  color: rgb(85, 85, 85);
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
  opacity: 1;
  height: 160px;
  overflow: hidden;
  padding-top: 0 !important;
}
</style>
