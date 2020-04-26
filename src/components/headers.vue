<template>
    <div class="headers">
        <div class="headers-top">
            <div :class="{'headers-logo':true,'headers-toppic':$headersObj.isShowTitle}">
                Blog
            </div>
            <div :class="{'headers-bigNav':true,'headers-toppic':$headersObj.isShowTitle}">
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    active-text-color="#409EFF">
                    <el-menu-item v-for="(item,idx) in headSort" :index="String(item.id)" :key="idx">{{item.sort}}</el-menu-item>
                </el-menu>
            </div>
            <div  :class="{'headers-smallNav':true,'headers-toppic':$headersObj.isShowTitle}">
                <el-button class="el-icon-menu" @click="showSmallMenu=!showSmallMenu"></el-button>
                <el-collapse-transition>
                    <div v-show="showSmallMenu" class="headers-smallMenu">
                        <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            @select="handleSelect"
                            active-text-color="#409EFF">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-menu-item index="2">导航2</el-menu-item>
                            <el-menu-item index="3">导航3</el-menu-item>
                            <el-menu-item index="4">导航4</el-menu-item>
                            <el-menu-item index="5">留言板</el-menu-item>
                        </el-menu>
                    </div>
                </el-collapse-transition>
            </div>
        </div>
        
        <div :class="{'headers-drop':true,'headers-droppic':$headersObj.isShowTitle}">
            {{$headersObj.titleText}}
        </div>
    </div>
</template>
<script>
import homeapi from '../api/home.js'
export default {
    data(){
        return{
            activeIndex:'1',
            showSmallMenu:false,
            headSort:[{id:-1,sort:'首页'}]
        }
    },
    created(){
        this.getHeadSort()
    },
    methods:{
        getHeadSort(){
            var that = this;
            homeapi.getHeadSort().then(function(d){
                if(d.code==200){
                    d.result.forEach(element => {
                        that.headSort.push(element)
                    });
                    that.headSort.push({id:'-2',sort:'留言板'})
                }
            })
        },
        handleSelect(index){
            if(index==-1){
                this.$router.push({
                    path:'/',
                    query:{}
                },function(){})
            }else if(index==-2){
                this.$router.push({
                    path:'/board',
                    query:{}
                },function(){})
            }else{
                this.$router.push({
                    path:'/articleList',
                    query:{}
                },function(){})
            }
        }
    }
}
</script>
<style>
    .headers{
        height: 60px;
        border-bottom: 1px solid #e6e6e6;
        overflow: hidden;
    }
    .headers-top{
        height: 60px;
    }
    .headers-logo{
        float: left;
        text-align: center;
        line-height: 60px;
        margin-left: 5%;
        position: relative;
        transition: top .5s;
        top: 0;
    }
    .headers-drop{
        width: 90%;
        margin: 0 auto;
        line-height: 60px;
        position: relative;
        top: 0px;
        transition: top .3s;
        font-size: 20px;
    }
    @media all and (min-width:768px){
        .headers-bigNav{
            margin-right: 5%;
            float: right;
            position: relative;
            transition: top .5s;
            top: 0;
        }
        .headers-smallNav{
            display: none;
        }
    }

    @media all and (max-width:768px){
        .headers-bigNav{
            display: none;
        }
        .headers-smallNav{
            margin-right: 5%;
            line-height: 60px;
            float: right;
            position: relative;
            transition: top .5s;
            top: 0;
        }
        .headers-smallMenu{
            border: 1px solid #e6e6e6;
            position: fixed;
            right: 5%;
            z-index: 99;
        }
    }
    .headers-toppic,.headers-droppic{
        top: -60px;
    }
    .el-menu.el-menu--horizontal{
        border: none;
    }
</style>