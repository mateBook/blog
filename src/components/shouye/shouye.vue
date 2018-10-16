<template>
    <div>
        <div class="describe box-shadow" ref="classifyfix">
            <h2>
                <a href="">macOS Mojave 10.14安装中常见的问题及解决方法</a>
            </h2>
            <div class="meta">
                <span><i class="iconfont icon-rili"></i>发表于 2018-08-05</span>
                <span class="divider"></span>
                <span><i class="iconfont icon-rili1"></i>更新于: 2018-08-22</span>
                <span class="divider"></span>
                <span><i class="iconfont icon-folder_icon"></i>分类于 教程</span>
                <span class="divider"></span>
                <!-- <span><i class="iconfont icon-rili"></i>热度: 9234 ℃</span> -->
                <!-- <span class="divider"></span> -->
                <!-- <span><i class="iconfont icon-rili"></i>字数统计: 3,613 字 </span>
                <span class="divider"></span> -->
                <span><i class="iconfont icon-shijian"></i>阅读时长 ≈ 15 分钟</span>
            </div>
            <p class="describe-body">
                随着macOS Mojave(莫哈韦) 10.14发行正式版本的临近，各种安装常见问题也需要同步更新，本篇文章就是针对10.14的常见问题的汇总，我会持续不间断更新，敬请期待关于Clover Bootloader的版本想要正确地安装macOS Mojave 10.14，它要求你的Clover Boo ...
            </p>
            <div class="describe-button">
                <a href="">阅读全文 »</a>
            </div>
        </div>

        <!-- 底部分页 -->
        <div class="page box-shadow">
            <i class="iconfont icon-cc-left" @click="setCurrent(currenPage - 1)" v-show="leftShow"></i>
            <span 
              v-for='(p,index) in groupList' 
              :class="{'active' : currenPage == index+1}"
              @click="setCurrent(index + 1)"
            >
              {{ p }}
            </span>
            <i class="iconfont icon-cc-right" @click="setCurrent(currenPage + 1)" v-show="rightShow"></i>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currenPage: 1, //当前页数
      totalPage: 7, //总页数
      leftShow: false, //上一页
      rightShow: true //下一页
    };
  },
  mounted() {
    this.bus.$on("toChangeTitle", function(title) {
      console.log(title);
    });
  },
  methods: {
    setCurrent(ind) {
      //设置当前页数函数

      ind < 1 ? (ind = 1) : (this.currenPage = ind);

      ind > this.totalPage
        ? (this.currenPage = this.totalPage)
        : (this.currenPage = ind);
      console.log(this.currenPage);
      console.log(this.groupList);
      this.groupList = [];
    }
  },
  watch: {
    currenPage(curVal, oldVal) {
      //监听当前页数变化
      curVal > 1 ? (this.leftShow = true) : (this.leftShow = false);
      curVal == this.totalPage
        ? (this.rightShow = false)
        : (this.rightShow = true);
      
      this.groupList;
    }
  },
  computed: {
    groupList() {
      var its = [];

      //当totalPage小于4时
      if (this.totalPage <= 4) {
        //当totalPage=1时
        (this.totalPage = 1) && (this.rightShow = false);
        for (var i = 0; i < this.totalPage; i++) {
          its.push(i + 1);
        }
        return its;
      }

      //当totalPage大于4时
      if (this.totalPage > 4) {
        return [1, 2, "...", this.totalPage];
      }
    }
  }
};
</script>

<style scoped>
.describe {
  padding: 33px;
  background-color: white;
}
.describe h2 {
  font-size: 22px;
  font-weight: 400;
}
.describe h2 a {
  color: #555;
}
.meta {
  font-size: 12px;
  color: #999;
}
.meta i {
  font-size: 12px;
}
.icon-rili,
.icon-rili1 {
  font-size: 14px !important;
}
.divider {
  margin: 0 8px;
  border-left: 1px solid #999;
}
.describe-body {
  font-size: 14px;
  margin-top: 70px;
  min-height: 56px;
}
.describe-button {
  text-align: center;
  width: 112px;
  height: 30px;
  border: 2px solid black;
  margin: 45px auto 0px;
  border-radius: 3px;
  cursor: pointer;
}
.describe-button a {
  color: #555;
  text-decoration: none;
}
.describe-button:hover {
  background-color: black;
}
.describe-button:hover a {
  color: white !important;
}
.page {
  margin-top: 15px;
  background-color: white;
  height: 60px;
  line-height: 60px;
}
.page span,
.page i {
  display: inline-block;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  color: #555;
  margin-left: 10px;
  border-top: 1px solid rgb(238, 238, 238);
  cursor: pointer;
}
.page span.active {
  color: #fff;
  background: #ccc;
  border-top-color: #ccc !important;
}
.page span:hover,
.page i:hover {
  border-top-color: #000;
}
</style>