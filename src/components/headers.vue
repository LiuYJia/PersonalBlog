<template>
    <div class="headers">
        <div class="headers-title">
            Blog
        </div>
        <div class="headers-bigNav">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                active-text-color="#409EFF">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="2">导航2</el-menu-item>
                <el-menu-item index="3">导航3</el-menu-item>
                <el-menu-item index="4">导航4</el-menu-item>
                <el-menu-item index="5">留言板</el-menu-item>
            </el-menu>
        </div>
        <div class="headers-smallNav">
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
</template>
<script>
export default {
    data(){
        return{
            activeIndex:'1',
            showSmallMenu:false
        }
    },
    created(){
    },
    methods:{
        handleSelect(index){
            if(this.activeIndex==index){
                return
            }
            if(index==1){
                this.$router.push({
                    path:'/',
                    query:{}
                })
            }else if(index==2){
                this.$router.push({
                    path:'/articleDetail',
                    query:{}
                })
            }else if(index==3){
            }else if(index==4){
            }
        }
    }
}
</script>
<style>
    .headers{
        height: 60px;
        border-bottom: 1px solid #e6e6e6;
    }
    .headers-title{
        float: left;
        text-align: center;
        line-height: 60px;
        margin-left: 5%;
    }
    @media all and (min-width:768px){
        .headers-bigNav{
            margin-right: 5%;
            float: right;
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
        }
        .headers-smallMenu{
            border: 1px solid #e6e6e6;
            position: absolute;
            right: 5%;
            z-index: 99;
        }
    }

</style>