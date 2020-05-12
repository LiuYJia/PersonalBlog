<template>
    <div class="articleList">
        <div class="contentBox">
            <div class="contentLeft">

                <el-tabs v-model="activeSort" type="card" @tab-click="handleClick">
                    <el-tab-pane :label="item.sort" :name="String(item.id)" v-for="(item,index) in sortArr" :key="index"></el-tab-pane>
                </el-tabs>

                <el-card shadow="hover" v-for="(item,index) in articleArr" :key="index">
                    <div class="cardLeft" @click="goDetail(item)">
                        <div class="card-title">{{item.title}}</div>
                        <div class="card-content" ref="cardContent">
                            {{item.content}}
                        </div>
                        <div class="card-date">{{item.date}}</div>
                    </div>
                    <!-- <div class="cardRight" @click="goDetail(item)">
                        <img src="../assets/images/login.jpg" alt="" srcset="">
                    </div> -->
                </el-card>

                 <el-pagination
                    @current-change="pageChange"
                    :hide-on-single-page="false"
                    :total="listCount"
                    layout="prev, pager, next">
                </el-pagination>
            </div>
            <div class="contentRight">
                <div class="rightLabel">
                    <div><i class="el-icon-star-off"></i> 推荐</div>
                    <el-divider></el-divider>
                    <p v-for="item in recommendList">
                        <el-link type="info" @click="goDetail(item)">{{item.title}}</el-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import commonMethods from '@/methods/methods.js'
import articleapi from '../api/article.js'
import homeapi from '../api/home.js'
export default {
    data(){
        return{
            queryData:{
                pageNum:1,
                pageSize:10
            },
            listCount:0,
            articleArr:[],
            sortArr:[],
            activeSort:'',
            recommendList:[]
        }
    },
    created(){
        this.getArticleSort()
        this.getRecommendList()
    },
    mounted(){
        
    },
    methods:{
        getArticleSort(){
            var that = this;
            articleapi.getArticleSort().then(function(d){
                if(d.code == 200){
                    that.sortArr = d.result
                    //显示记录标签位置
                    that.activeSort = that.$headersObj.activeTab?that.$headersObj.activeTab:String(d.result[0].id)
                    that.getArticleList(that.activeSort)
                }
            })
        },
        getArticleList(id){
            var obj = {
                sortId:id,
                pageNum:this.queryData.pageNum,
                pageSize:this.queryData.pageSize
            }
            var that = this;
            articleapi.getArticleList(obj).then(function(d){
                if(d.code==200){
                    that.listCount = d.count
                    that.articleArr = d.result.map(function(el){
                        var obj = {
                            id: el.id,
                            title: el.title,
                            content:el.content.replace(/[^\u4e00-\u9fa5]/gi,"").slice(0,50)+'……',
                            // content: el.content,
                            date:commonMethods.UTCToBeijing(el.date),
                            author: el.author,
                            browse_times: el.browse_times,
                            sort_id: el.sort_id,
                        }
                        return obj;
                    })
                }

                // that.$nextTick(function(){
                //     if(that.$headersObj.activeScrollTop){
                //         document.getElementsByClassName('articleList')[0].scrollTop = that.$headersObj.activeScrollTop
                //     }
                // })

            })
        },
        //获取推荐列表
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
        pageChange(index){
            this.queryData.pageNum = index
            this.getArticleList(this.activeSort)
        },
        handleClick(e){
            this.getArticleList(e.name)
        },
        //跳转文章详情
        goDetail(item){

            // var _scrollTop = document.getElementsByClassName('articleList')[0].scrollTop
            // this.$set(this.$headersObj, 'activeScrollTop', _scrollTop)

            this.$set(this.$headersObj, 'activeTab', this.activeSort)
            this.$router.push({
                path:'/articleDetailFront',
                query:{id:item.id}
            },function(){})

        }
    }
}
</script>
<style>
    .articleList{
        height: calc(100% - 61px);
        overflow: auto;
        color: #909399;
    }
    .articleList img{
        width: 100%;
        height: 100%;
    }
    .articleList .el-card{
        color: #909399;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .articleList .el-card__body{
        display: flex;
    }
    .articleList .cardLeft{
        /* padding-right: 10px; */
    }
    .articleList .card-title{
        font-size: 18px;
    }
    .articleList .card-content{
        min-height: calc(100% - 65px);
    }
    .articleList .card-date{
        font-size: 12px;
    }
    .articleList .card-content,.articleList .card-date{
        margin-top: 10px;
    }
    @media all and (min-width:768px){
        .articleList .cardLeft{
            flex: 3;
        }
        .articleList .cardRight{
            flex: 1;
        }
        .articleList .rightLabel{
            position: fixed;
        }
    }
    @media all and (max-width:768px){
        .articleList .el-card .cardRight{
            display: none;
        }
    }
    .articleList .el-pagination{
        text-align: center;
    }
</style>