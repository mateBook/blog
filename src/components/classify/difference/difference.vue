<template>
    <div class="content">
        <h1>分类</h1>
        <p>目前共计 16 个分类</p>
        <ul>
            <li>
                <router-link :to="{ name: 'classifyDetail', params: { id: '10.13.16'}}">列表</router-link>
                <span>(2)</span>
                <ul>
                    <li>
                        <router-link :to="{ name: 'classifyDetail', params: { id: '10.13.16'}}">列表</router-link>
                        <span>(2)</span>
                    </li>
                </ul>
            </li>
        </ul>
       
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [""]
    };
  }
};
</script>

<style scoped>
.content {
  background-color: white;
  padding: 50px;
}
.content h1 {
  font-size: 28px;
  color: black;
}
.content ul {
  text-align: left;
}
.content ul li {
  list-style: circle;
}
.content ul li a {
  color: #555;
}
.content ul li span {
  color: #bbb;
}
.content ul li ul {
    margin-left: 20px;
}
</style>