<template>
    <div class="footers">
        这里是底部
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