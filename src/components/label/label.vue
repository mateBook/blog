<template>
    <div class="content">
       <router-view/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: [
                {
                    text:'hmtl',
                    classify:'first'
                }
                ,{
                    text:'hmtl',
                    classify:'second'
                }
                ,{
                    text:'hmtl',
                    classify:''
                }
            ]
        }
    },
};
</script>

<style scoped>
   .content{
       background-color: white;
   }
   .labels{
       padding:50px;
       box-sizing: border-box;
   }
   .labels h1{
       font-size:30px;
       color:#000;
   }
   .tabs{
       text-align:left;
       margin-top: 20px;

   }
   .tabs span{
       border-bottom: 1px solid #b9b9b9;
       margin-left: 20px;
       cursor: pointer;
       display: inline-block;
       color:#ccc;
   }
   .first{
       font-size: 30px;
       color:#494949 !important;
   }
   .second{
       font-size:26px;
       color:#6f6f6f !important;
   }
</style>