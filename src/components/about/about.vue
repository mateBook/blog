<template>
    <div class="content ">
        <div class="aboutMe box-shadow">
            <h2 class="title">关于</h2>
            <p class="hey">Hey,Guys.</p>
            <p class="wellcome">欢迎来到黑锅小兵的部落阁</p>
            <p>
                这里记录了Hackintosh的心路历程，包括了我制作的macOS各个发行版测/试版的镜像资源，以及黑苹果所需要的各种工具等。当然更多的是我写的一些原创性的文章，尽管有些文章是通过翻译的形式呈现给大家，但是这中间夹杂着很多我的心得体会以及写作的思维模式。<br>这个博客从2008年开始就陆续更新了，之前的文章已经全部删除掉了。<br>从2001年开始接触Linux到现在开始转而使用Hackintosh，我觉得就是个积少成多水到渠成的过程。之前在Linux下面积累的经验可以让我更快地上手macOS，对于我来说macOS的生态要比Linux好很多，应用程序多，兼容性也不错，最最重要的是还有个shell，用它可以连通世界。<br>如果你想飞，那么请关注我，老司机带你一起飞保证不翻车！
            </p>
            <p class="wellcome">关于我</p>
            <p>
                姓名： 许小枫 <br>
                性别： 男 <br>
                出生日期： 1995 <br>
                目前居住地： 广州 <br>
                业余爱好： 旅游，篮球，音乐，吉他，美食，美女，白酒
            </p>
            <p class="wellcome">联络方式</p>
            <p>
                Q Q：2569971980 <br>
                微信：w1099725538 <br>
                E_Mail: 2569971980@qq.com <br>
            </p>
            <p class="wellcome">如果你认可我的工作，可以通过打赏支持我后续的更新</p>
            <div class="reward">
                <div>
                    <h3>微信</h3>
                    <div>
                        <img src="" alt="">
                    </div>
                </div>
                <div>
                    <h3>支付宝</h3>
                    <div>
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>


        <!-- 留言 -->
        <div class="note box-shadow">
            <div class="node_content">
                <div class="note_title">
                    <h4>
                        <input
                                type="text"
                                placeholder="称呼"
                                @focusin="inDiv"
                                @focusout="outDiv"
                                :class="isActive ? 'border-red' : 'border-grey'"
                        >
                    </h4>

                    <h4>
                        <input
                                type="text"
                                placeholder="邮箱"
                                @focusin="inDivTwo"
                                @focusout="outDivTwo"
                                :class="isActiveTwo ? 'border-red' : 'border-grey'"
                        >
                    </h4>

                    <h4>
                        <input
                                type="text"
                                placeholder="网址(http://)"
                                @focusin="inDivThere"
                                @focusout="outDivThere"
                                :class="isActiveThere ? 'border-red' : 'border-grey'"
                        >
                    </h4>
                </div>
                <div class="edit">
                    <textarea name="" id="" cols="30" rows="10" placeholder="给你留个喷作者的机会"></textarea>

                </div>
                <button class="btn">回复</button>

            </div>

            <p class="comment_title">评论(<span class="count">20</span>)</p>
            <!-- 评论列表 -->
            <ul class="comment_list">
                <li>
                    <img src="../../assets/img/20181005160036.jpg" alt="">
                    <section>
                        <div class="head"><a href="">小调皮</a></div>
                        <div><p>我也是遇到这种情况</p></div>
                        <div><span class="time">6秒前</span><span class="vat">回复</span></div>
                    </section>
                </li>
                <li>
                    <img src="../../assets/img/20181005160036.jpg" alt="">
                    <section>
                        <div class="head"><a href="">小调皮</a></div>
                        <div><p>我也是遇到这种情况</p></div>
                        <div><span class="time">6秒前</span><span class="vat">回复</span></div>
                    </section>
                </li>
                <li>
                    <img src="../../assets/img/20181005160036.jpg" alt="">
                    <section>
                        <div class="head"><a href="">小调皮</a></div>
                        <div><p>我也是遇到这种情况</p></div>
                        <div><span class="time">6秒前</span><span class="vat">回复</span></div>
                    </section>
                </li>
                <li>
                    <img src="../../assets/img/20181005160036.jpg" alt="">
                    <section>
                        <div class="head"><a href="">小调皮</a></div>
                        <div><p>我也是遇到这种情况</p></div>
                        <div><span class="time">6秒前</span><span class="vat">回复</span></div>
                    </section>
                </li>
                <li>
                    <img src="../../assets/img/20181005160036.jpg" alt="">
                    <section>
                        <div class="head"><a href="">小调皮</a></div>
                        <div><p>我也是遇到这种情况</p></div>
                        <div><span class="time">6秒前</span><span class="vat">回复</span></div>
                    </section>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                isActive: false,
                isActiveTwo: false,
                isActiveThere: false
            };
        },
        methods: {
            inDiv: function(event) {
                this.isActive = true;
            },
            outDiv: function(event) {
                this.isActive = false;
            },
            inDivTwo: function(event) {
                this.isActiveTwo = true;
            },
            outDivTwo: function(event) {
                this.isActiveTwo = false;
            },
            inDivThere: function(event) {
                this.isActiveThere = true;
            },
            outDivThere: function(event) {
                this.isActiveThere = false;
            }
        }
    };
</script>

<style scoped>
    .aboutMe {
        text-align: left;
        padding: 45px 34.5px 60px;
        box-sizing: border-box;
        background-color: white;
    }
    .title {
        font-size: 34px;
        text-align: center;
    }

    .wellcome {
        margin: 30px 0 8px 0;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
    }
    .reward {
        border: 1px solid #ddd;
        height: 255px;
        display: flex;
    }
    .reward > div {
        width: 50%;
    }
    .reward > div:first-child {
        border-right: 1px solid #ddd;
    }
    .reward h3 {
        height: 45px;
        line-height: 45px;
        border-bottom: 2px solid #ddd;
        padding-left: 15px;
        box-sizing: border-box;
    }
    .reward > div > div {
        height: 208px;
        background-color: #f9f9f9;
        text-align: center;
    }
    .reward > div > div > img {
        width: 162px;
        height: 162px;
        margin-top: 10px;
    }
    .note {
        min-height: 500px;
        margin-top: 10px;
        background-color: white;
        padding: 40px;
        box-sizing: border-box;
    }
    .note_title {
        display: flex;
        justify-content: space-between;
    }
    .node_content {
        border: 1px solid #eee;
        border-radius: 3px;
        padding-bottom: 50px;
        box-sizing: border-box;
    }
    .note_title h4 {
        width: 33.3%;
        text-align: center;
        height: 45px;
        line-height: 45px;
        padding: 0 5px;
        box-sizing: border-box;
    }
    .note_title h4 input {
        width: 100%;
        height: 45px;
        border: none;
        border-bottom: 1px dashed #ddd;
        padding-left: 10px;
        box-sizing: border-box;
    }
    .border-red {
        border-bottom: 1px dotted red !important;
    }
    .border-grey {
        border-bottom: 1px dotted #ddd !important;
    }
    .edit textarea {
        margin-top: 20px;
        width: 98%;
        height: 160px;
        color: #757575;
        border: none;
        resize: none;
    }
    .btn {
        width: 65px;
        height: 40px;
        border-radius: 40px;
        border: 1px solid #f7f7f7;
        color: #313131;
        float: right;
        margin-right: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .btn:hover {
        border: 1px solid rgb(49, 145, 288);
        color: rgb(49, 145, 288);
        background-color: white;
    }
    .count {
        font-size: 20px;
        text-align: center;
    }
    .comment_title {
        text-align: left;
        margin-top: 10px;
    }

    .comment_list {
        text-align: left;
        margin-top: 35px;
    }
    .comment_list li {
        display: flex;
        margin-top: 30px;
    }
    .comment_list li img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    .comment_list li section {
        width: calc(100% - 40px);
        margin-left: 11px;
        border-bottom: 1px solid #f5f5f5;
        padding-bottom: 10px;
    }
    .head a {
        color: #2c2020;
        font-weight: 700;
    }
    .time {
        font-size: 12px;
        color: #b3b3b3;
        margin-right: 20px;
    }
    .vat {
        font-size: 12px;
        color: #ef2f11;
        cursor: pointer;
    }
</style>