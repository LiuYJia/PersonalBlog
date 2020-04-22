<template>
    <div class="articleDetail">
        <div class="contentBox">
            <div class="contentLeft">
                <div class="articleDetail-title">
                    标题标题标题标题标题标题标题标题标题标题
                </div>
                <div class="articleDetail-author">
                    <i class="el-icon-postcard"></i>
                    <span>2020-04-22</span>
                    <span>Liu</span>
                </div>
                <div class="articleDetail-content">
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                    <p>测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章测试文章</p>
                </div>
            </div>
            <div class="contentRight">
                <div># 推荐</div>
                <el-divider></el-divider>
                <div>11111</div>
                <div>222</div>
                <div>333</div>
                <div>444</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
        console.log(this.showTitle)
    },
    mounted(){
        var that = this;
        window.addEventListener('scroll', function(e){
            var x= document.getElementsByClassName('contentBox')[0].scrollTop
            if(x >= 50){
                that.showTitle = true
                that.titleText = 'sadasdasda'
            }else{
                that.showTitle = false
                that.titleText = ''
            }
            console.log(that.showTitle)
        },true)
    },
    methods:{
    }
}
</script>
<style>
    .articleDetail{
        height: calc(100% - 61px);
        overflow: auto;
    }
    .articleDetail-title{
        font-size: 25px;
        text-align: center;
    }
    .articleDetail-author{
        text-align: center;
        padding: 20px 0;
        font-size: 14px;
    }
</style>