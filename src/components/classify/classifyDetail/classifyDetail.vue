<template>
    <div class="labelDetail">
        <div class="content">
            <div class="content_title">
                <h1>10.12.6 <small>标签</small></h1>
            </div>
            <div class="post">
                <header>
                    <div>10-16</div>
                    <p>   <a href="">MacOS多系统下蓝牙设备的自动连接</a> </p>
                </header>
            </div>

            <div class="post">
                <header>
                    <div>10-16</div>
                    <p>   <a href="">【黑果小兵】macOS High Sierra 10.13正式版更新(17A405) with Clover 4238原版镜像</a> </p>
                </header>
            </div>

            <div class="post">
                <header>
                    <div>10-16</div>
                    <p>   <a href="">【黑果小兵】macOS High Sierra 10.13正式版更新(17A405) with Clover 4238原版镜像</a> </p>
                </header>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labelName: ''
            }
        },
        created(){
            console.log(this.$route.params)
            console.log(this.$route.query)
        }
    }
</script>

<style scoped>
.labelDetail{
    text-align:left;
    background-color:white;
    padding: 50px;
}
.content{
    margin-left:55px;
    position:relative;
    min-height: 500px;
}
.content::after {
    content: " ";
    position: absolute;
    top: 20px;
    left: 0;
    margin-left: -2px;
    width: 4px;
    height: 100%;
    background: #f5f5f5;
    z-index: 10;
}
.content_title{
    font-size: 26px;
    font-weight: bold;
    margin:60px 0;
    position:relative;
}
.content_title::before{
    content: " ";
    position: absolute;
    left: 0;
    top: 50%;
    margin-left: -4px;
    margin-top: -4px;
    width: 8px;
    height: 8px;
    background: #bbb;
    border-radius: 50%;
    z-index: 15;
}
.content_title h1{
    margin-left: 20px;
}

.content_title h1 small{
    color:#bbb;
    margin-left:5px;
}
.post{
    position: relative;
    margin: 30px 0;
}
.post header{
    border-bottom: 1px dashed #ccc;
}
.post header:hover{
    border-bottom-color: #666;
}
.post header a{
    color:#666;
    text-decoration:none;
}
.post header::before{
    content: " ";
    position: absolute;
    left: 0;
    top: 12px;
    width: 6px;
    height: 6px;
    margin-left: -4px;
    background: #bbb;
    border-radius: 50%;
    border: 1px solid #fff;
    transition-duration: .2s;
    transition-timing-function: ease-in-out;
    transition-delay: 0s;
    transition-property: background;
    z-index: 11;
}
.post header:hover:before{
    background:rgb(34,34,34);
}
.post header>div{
    position: absolute;
    font-size: 12px;
    left: 20px;
    top: 5px;
}
.post header>p{
    margin-left: 60px;
    font-size: 16px;
    font-weight: 400;
    line-height: inherit;
}
</style>