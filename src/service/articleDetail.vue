<template>
    <div class="articleDetail">
        <div class="contentBox">
            <div class="contentLeft">

                <el-page-header @back="goBack" content="文章详情">aaa</el-page-header>

                <div class="articleDetail-title" ref="articleTitle">
                    {{articleTitle}}
                </div>
                <div class="articleDetail-author">
                    <span>{{articleDate}}</span>
                    <!-- <el-divider direction="vertical"></el-divider>
                    <span>{{articleAuthor}}</span> -->
                    <el-divider direction="vertical"></el-divider>
                    <span>浏览次数：{{browseTimes}}</span>
                </div>
                <div class="articleDetail-content" id="test-markdown-view">
                    <textarea style="display:none;" ref="articleContent"></textarea>
                </div>
            </div>
            <div class="contentRight">
                <div class="rightLabel">
                    <div><i class="el-icon-star-off"></i> 推荐</div>
                    <el-divider></el-divider>
                    <p v-for="(item,index) in recommendList" :key="index">
                        <el-link type="info" @click="goDetail(item)">{{item.title}}</el-link>
                    </p>
                </div>
            </div>
        </div>
        <transition name="el-fade-in">
            <div class="backTop" v-if="$headersObj.isShowTitle">
                <i class="el-icon-caret-top" @click="backTop" ></i>
            </div>
        </transition>
    </div>
</template>
<script>
import commonMethods from '@/methods/methods.js'
import articleapi from '../api/article.js'
export default {
    data(){
        return{
            articleTitle:'',
            articleDate:'',
            articleAuthor:'',
            browseTimes:'',
            recommendList:[]
        }
    },
    created(){
        this.getArticleDetail()
        this.getRecommendList()
    },
    mounted(){
        var _height = window.getComputedStyle(this.$refs.articleTitle).height.slice(0,-2)
        var that = this;
        document.getElementsByClassName('articleDetail')[0].addEventListener('scroll', function(e){
            var _scrollTop = document.getElementsByClassName('articleDetail')[0].scrollTop
            if(_scrollTop > Number(_height) + 15){
                that.$set(that.$headersObj, 'isShowTitle', true)
                that.$set(that.$headersObj, 'titleText', that.articleTitle)
            }else{
                that.$set(that.$headersObj, 'isShowTitle', false)
                that.$set(that.$headersObj, 'titleText', '')
            }
        },true)
    },
    methods:{
        getRecommendList(){
            var that = this;
            var data = {
                isRecommend:true
            }
            articleapi.getArticleList(data).then(function(d){
                if(d.code == 200){
                    that.recommendList = d.result
                }
            })
        },
        goBack(){
            this.$router.go(-1)
        },
        goDetail(item){

            this.getArticleDetail(item.id)

        },
        getArticleDetail(id){
            if(id){
                var articleId = id
                document.getElementById('test-markdown-view').innerHTML = ''
            }else{
                var articleId = this.$route.query.id
            }
            
            var that = this;
            
            articleapi.getArticleDetail(articleId).then(function(d){
                if(d.code == 200){
                    that.articleTitle = d.result[0].title
                    that.articleDate = commonMethods.changeTime(d.result[0].date)
                    that.articleAuthor = d.result[0].author
                    that.browseTimes = d.result[0].browse_times
                    editormd.markdownToHTML("test-markdown-view", {
                        markdown : d.result[0].content, // Also, you can dynamic set Markdown text
                        htmlDecode : true,  // Enable / disable HTML tag encode.
                        htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
                    });
                }
            })
        },
        backTop(){
            document.getElementsByClassName('articleDetail')[0].scrollTop = 0
        }
    }
}
</script>
<style>
    .articleDetail{
        height: calc(100% - 61px);
        overflow: auto;
        color: #909399;
    }
    .articleDetail .el-page-header__content{
        color: #909399;
        font-size: 14px;
    }
    .articleDetail-title{
        font-size: 25px;
        text-align: center;
        margin-top: 25px;
    }
    .articleDetail-author{
        text-align: center;
        padding: 20px 0;
        font-size: 14px;
    }
    .articleDetail-content{
        color: #909399;
    }
    .articleDetail .backTop{
        display: none;
        position: fixed;
        right: 5%;
        bottom: 25px;
        background-color: #fff;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #409eff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 0 6px rgba(0,0,0,.12);
        cursor: pointer;
        z-index: 5;
    }
    @media all and (max-width:768px){
        .articleDetail-title{
            font-size: 20px;
        }
    }
    @media all and (min-width:768px){
        .articleDetail .rightLabel{
            position: fixed;
        }
    }
    
</style>