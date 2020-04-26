<template>
    <div class="articleList">
        <div class="contentBox">
            <div class="contentLeft">
                777
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
        }
    },
    created(){
        this.getArticleList()
    },
    mounted(){
    },
    methods:{
        getArticleList(){
            console.log(999)
        },
    }
}
</script>
<style>
    .articleDetail{
        height: calc(100% - 61px);
        overflow: auto;
       color: #909399;
    }
</style>