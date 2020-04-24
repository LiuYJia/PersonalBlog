<template>
    <div id="app">
        <headers />
        <router-view/>
    </div>
</template>
<script>
import headers from '@/components/headers.vue';
export default {
    components:{headers},
    name: 'App'
}
</script>
<style>
    html,body,#app{
        height: 100%;
        font-size: 14px;
        box-sizing: border-box;
        color: #909399;
        padding: 0;
        margin: 0;
    }
    .contentBox{
        min-height: calc(100% - 61px);
    }
    .contentBox .contentLeft{
        padding: 20px 5%;
    }
    .contentBox  .contentRight{
        padding: 20px 5%;
    }
    .el-divider--horizontal{
        margin:12px 0;
    }
    @media all and (min-width:768px){
        .contentBox{
            display: flex;
        }
        .contentLeft{
            flex: 3;
        }
        .contentRight{
            flex: 1;
        }
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/  
    ::-webkit-scrollbar{  
        width: 8px;    
        background-color: white;  
    }  

    /*定义滚动条轨道 内阴影+圆角*/  
    ::-webkit-scrollbar-track{  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
        border-radius: 10px;  
        background-color: white;  
    }  

    /*定义滑块 内阴影+圆角*/  
    ::-webkit-scrollbar-thumb{  
        border-radius: 10px;  
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
        background-color: #DCDFE6;  
    }  
    /*定义最上方和最下方的按钮*/
    ::-webkit-scrollbar-button{
        display: none;
    }
</style>