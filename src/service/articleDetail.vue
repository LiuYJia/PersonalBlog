<template>
    <div class="articleDetail">
        <div class="contentBox">
            <div class="contentLeft">
                <div class="articleDetail-title" ref="articleTitle">
                    哈哈哈哈哈啊哈哈哈哈哈哈哈啊哈哈啊哈哈哈哈哈哈哈啊哈哈
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

    },
    mounted(){
        var _height = window.getComputedStyle(this.$refs.articleTitle).height.slice(0,-2)
        var that = this;
        window.addEventListener('scroll', function(e){
            var _scrollTop = document.getElementsByClassName('articleDetail')[0].scrollTop
            if(_scrollTop > Number(_height) + 15){
                that.$set(that.$headersObj, 'isShowTitle', true)
                that.$set(that.$headersObj, 'titleText', 'aaa')
            }else{
                that.$set(that.$headersObj, 'isShowTitle', false)
                that.$set(that.$headersObj, 'titleText', '')
            }
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