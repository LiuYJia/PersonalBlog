<template>
    <div class="home">
        <div class="contentBox">
            <div class="contentLeft">

                <div class="oneBlock">
                    <i class="el-icon-ship blockTitle"></i>ONE
                    <el-divider></el-divider>
                    <div class="boxContainer">
                        <el-carousel :interval="5000" type="card">
                            <el-carousel-item v-for="(item,index) in oneArr" :key="index">
                                <img :src="item.img_url" alt="" srcset="">
                                <div class="oneText">{{item.text}}</div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>

                <div class="articleBlock">
                    <i class="el-icon-reading blockTitle"></i>最近更新
                    <el-divider></el-divider>
                    <div class="boxContainer">
                        <el-card shadow="hover" v-for="(item,index) in recentArr" :key="index">
                            <div class="cardLeft">
                                <div class="card-title">{{item.title}}</div>
                                <div class="card-content" ref="cardContent">
                                    {{item.content}}
                                </div>
                                <div class="card-date">{{item.date}}</div>
                            </div>
                            <div class="cardRight">
                                <img src="../assets/images/login.jpg" alt="" srcset="">
                            </div>
                        </el-card>
                    </div>
                </div>

            </div>
            <div class="contentRight">

                <div class="positionBlock">
                    <i class="el-icon-position blockTitle"></i>此刻
                    <el-divider></el-divider>
                    <div class="boxContainer">
                        <p>位置：{{weatherObj.city}}</p>
                        <p>天气：{{weatherObj.weather}}</p>
                        <p>温度：{{weatherObj.temperature}}</p>
                    </div>
                </div>

                <div class="msgBlock">
                    <i class="el-icon-user blockTitle"></i>个人
                    <el-divider></el-divider>
                    <div class="boxContainer">
                        <p>{{msgObj.name}}</p>
                        <p>{{msgObj.email}}</p>
                        <p><a :href="msgObj.github" target="_blank" rel="noopener noreferrer">{{msgObj.github}}</a></p>
                    </div>
                </div>

                <div class="boardBlock">
                    <i class="el-icon-chat-line-square blockTitle"></i>留言
                    <el-divider></el-divider>
                    <div class="boxContainer">
                        <div class="boardBlock-item" v-for="item in boardArr">
                            <div># {{item.name}}<span>{{item.date}}</span></div>
                            <div class="boardBlock-itemtext">{{item.content}}</div>
                        </div>
                        <el-button type="primary" icon="el-icon-edit" plain @click="goBoard">留言</el-button>
                    </div>
                </div>

            </div>
        </div>
        <footers />
    </div>
</template>
<script>
import footers from '@/components/footers.vue';
import homeapi from '../api/home.js'
import boardapi from '../api/board.js'
export default {
    components:{footers},
    data(){
        return{
            oneArr:[],
            weatherObj:{
                city:'无法获取位置',
                weather:'*',
                temperature:'*'
            },
            msgObj:{
                name:'',
                email:'',
                github:''
            },
            recentArr:[],
            boardArr:[]
        }
    },
    created(){
        this.getPersonMsg()
        this.getRecentArticle()
        this.getOneMsg()
        this.getBoard()
        this.getCity()
    },
    methods:{
        //one列表
        getOneMsg(){
            var that = this;
            homeapi.getOneMsg().then(function(d){
                if(d.code==200){
                    that.oneArr = d.result
                }
            })
        },
        //城市
        getCity(){
            var that = this
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch()
                citySearch.getLocalCity(function (status, result) {
                    that.getWeather(result.city)
                })
            })
        },
        //天气
        getWeather(d){
            var that = this;
            AMap.plugin('AMap.Weather', function() {
                var weather = new AMap.Weather();
                weather.getLive(d, function(err, data) {
                    that.weatherObj.city = data.city
                    that.weatherObj.weather = data.weather
                    that.weatherObj.temperature = data.temperature?data.temperature+'°C':'*'
                })
            })
        },
        //个人资料
        getPersonMsg(){
            var that = this;
            homeapi.getPersonMsg().then(function(d){
                if(d.code==200){
                    that.msgObj.name = d.result.name
                    that.msgObj.email = d.result.email
                    that.msgObj.github = d.result.github
                }
            })
        },
        //最近更新
        getRecentArticle(){
            var that = this;
            homeapi.getRecentArticle().then(function(d){
                if(d.code==200){
                    that.recentArr = d.result.splice(0,4).map(function(el){
                        var obj = {
                            id: el.id,
                            title: el.title,
                            content:el.content.replace(/[^\u4e00-\u9fa5]/gi,"").slice(0,50)+'……',
                            // content: el.content,
                            date: new Date(el.date).toLocaleString(),
                            author: el.author,
                            browse_times: el.browse_times,
                            sort_id: el.sort_id,
                        }
                        return obj;
                    })
                }

                // that.$nextTick(function(){
                //     var showdown = require('showdown')
                //     var _ref = that.$refs.cardContent
                //     for(var i=0;i<_ref.length;i++){
                //         //获取要转换的文字
                //         var text = that.$refs.cardContent[i].innerText;
                //         //创建实例
                //         var converter = new showdown.Converter();
                //         //进行转换
                //         var html = converter.makeHtml(text);
                //         //展示到对应的地方  result便是id名称
                //         that.$refs.cardContent[i].innerText = html;
                //     }   
                // })
            })
        },
        //留言板
        getBoard(){
            var that = this;
            boardapi.getBoard().then(function(d){
                console.log(d)
                if(d.code==200){
                    that.boardArr = d.result.map(function(e){
                        var obj = {
                            name:e.name,
                            content:e.content,
                            date:new Date(e.date).toLocaleString()
                        }
                        return obj;
                    })
                }
            })
        },
        goBoard(){
            this.$router.push({
                path:'/articleDetail',
                query:{}
            },function(){})
        }
    }
}
</script>
<style>
    .home{
        height: calc(100% - 61px);
        overflow: auto;
    }
    .home .blockTitle{
        margin-right: 20px;
    }
    .home img{
        width: 100%;
        height: 100%;
    }
    .home ul li{
        list-style: none;
    }
    .home .boxContainer{
        padding: 0px 25px;
    }
    .oneBlock,.articleBlock,.positionBlock,.msgBlock,.boardBlock{
        padding-top: 10px;
    }
    .home .oneText{
        position: absolute;
        left: 0;
        bottom: 0;
        color: rgba(255, 255, 255, 0.8);
        font-size: 12px;
        margin: 5px 10px;
    }
    .home .el-card{
        color: #909399;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .home .articleBlock .el-card__body{
        display: flex;
    }
    .home .cardLeft{
        padding-right: 10px;
    }
    .home .card-title{
        font-size: 18px;
    }
    .home .card-content{
        min-height: calc(100% - 65px);
    }
    .home .card-date{
        font-size: 12px;
    }
    .home .card-content,.home .card-date{
        margin-top: 10px;
    }
    .home a{
        text-decoration: none;
        color: #909399;
    }
    .boardBlock-item{
        margin-bottom: 20px;
    }
    .boardBlock-item span{
        font-size: 12px;
        margin-left: 12px;
    }
    .boardBlock-itemtext{
        border-left: 3px solid #DCDFE6;
        padding: 0px 10px;
        margin-top: 10px;
    }
    .boardBlock .el-button{
        width: 100%;
    }
    @media all and (min-width:768px){
        .home .el-carousel__container{
            height: 200px;
        }
        .home .cardLeft{
            flex: 3;
        }
        .home .cardRight{
            flex: 1;
        }
    }
    @media all and (max-width:768px){
        .home .el-carousel__container{
            height: 100px;
        }
        .home .oneText{
            font-size: 10px;
        }
        .home .el-card .cardRight{
            display: none;
        }
    }
</style>