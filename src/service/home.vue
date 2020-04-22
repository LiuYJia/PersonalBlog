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
                        <p>测试文字测试文字测试文字测试文字测试文字测试文字</p>
                        <p>测试文字测试文字测试文字测试文字测试文字测试文字</p>
                        <p>测试文字测试文字测试文字测试文字测试文字测试文字</p>
                        <p>测试文字测试文字测试文字测试文字测试文字测试文字</p>
                    </div>
                </div>

            </div>
            <div class="contentRight">

                <div class="positionBlock">
                    <i class="el-icon-position blockTitle"></i>今日天气
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
                        <p>{{msgObj.github}}</p>
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
            }
        }
    },
    created(){
        this.getOneMsg()
        this.getCity()
        this.getPersonMsg()
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
    .oneBlock,.articleBlock,.positionBlock,.msgBlock{
        padding-top: 10px;
    }
    .home .oneText{
        position: absolute;
        left: 0;
        bottom: 0;
        color: rgba(255, 255, 255, 0.6);
        font-size: 12px;
        margin: 5px 10px;
    }
    @media all and (min-width:768px){
        .home .el-carousel__container{
            height: 200px;
        }
    }
    @media all and (max-width:768px){
        .home .el-carousel__container{
            height: 80px;
        }
    }
</style>