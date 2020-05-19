<template>
    <div class="footers">
        <span>刘什么佳的垃圾箱</span>
        <el-divider direction="vertical"></el-divider> 
        <a href="http://www.beian.miit.gov.cn" target="_blank">京ICP备20017306号</a>
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
    }
}
</script>
<style>
    .footers{
        text-align: center;
        line-height: 60px;
        height: 60px;
        border-top:1px solid #e6e6e6;
    }
</style>