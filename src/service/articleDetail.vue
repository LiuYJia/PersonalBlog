<template>
    <div class="articleDetail">
        <div class="contentBox">
            <div class="contentLeft">
                <div class="articleDetail-title" ref="articleTitle">
                    {{articleTitle}}
                </div>
                <div class="articleDetail-author">
                    <!-- <i class="el-icon-postcard"></i> -->
                    <span>{{articleDate}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>{{articleAuthor}}</span>
                    <el-divider direction="vertical"></el-divider>
                    <span>浏览次数：{{browseTimes}}</span>
                </div>
                <div class="articleDetail-content" id="test-markdown-view">
                    <textarea style="display:none;" ref="articleContent"></textarea>
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
import articleapi from '../api/article.js'
export default {
    data(){
        return{
            articleTitle:'',
            articleDate:'',
            articleAuthor:'',
            browseTimes:''
        }
    },
    created(){
        this.getArticleDetail()
    },
    mounted(){
        var _height = window.getComputedStyle(this.$refs.articleTitle).height.slice(0,-2)
        var that = this;
        window.addEventListener('scroll', function(e){
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
        getArticleDetail(){
            var that = this;
            articleapi.getArticleDetail().then(function(d){
                console.log(d)
                if(d.code == 200){
                    that.articleTitle = d.result[0].title
                    that.articleDate = new Date(d.result[0].date).toLocaleString()
                    that.articleAuthor = d.result[0].author
                    that.browseTimes = d.result[0].browse_times
                    editormd.markdownToHTML("test-markdown-view", {
                        markdown : d.result[0].content, // Also, you can dynamic set Markdown text
                        htmlDecode : true,  // Enable / disable HTML tag encode.
                        htmlDecode : "style,script,iframe",  // Note: If enabled, you should filter some dangerous HTML tags for website security.
                    });
                }
            })
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
    .articleDetail-title{
        font-size: 25px;
        text-align: center;
    }
    .articleDetail-author{
        text-align: center;
        padding: 20px 0;
        font-size: 14px;
    }
    .articleDetail-content{
        color: #909399;
    }
</style>