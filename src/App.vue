<template>
    <div id="app" @click.stop="showClickTips">
        <headers />
        <router-view/>
    </div>
</template>
<script>
import homeapi from './api/home.js'
import headers from '@/components/headers.vue';
export default {
    components:{headers},
    name: 'App',
    data(){
        return{
            heartindex:0,
            clickTipsHide:false
        }
    },
    created(){
        //访问统计
        var date = new Date().toLocaleDateString()
        var obj = {
            date:date
        }
        homeapi.addHistoryAccess(obj).then(function(d){})
    },
    mounted(){},
    methods:{
        //生成随机数
        RandomNumBoth(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            var num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        },
        showClickTips(e){
            var that = this;
            var _left = e.pageX
            var _top = e.pageY
            var index = that.RandomNumBoth(1,5)
            var _html = `
                <div class="heart heart${that.heartindex} heartcolor${index}" style="position:fixed;left:${_left}px;top:${_top}px;"></div>
            `;
            $('body').append(_html)

            setTimeout(() => {
                $(`.heart${that.heartindex}`).css({'top':`${_top - 180}px`,'opacity':'0.2'})
                return (function(){
                    //保存私有变量
                    var _idx = that.heartindex
                    setTimeout(()=>{
                        $(`.heart${_idx}`).remove()
                    },800)
                    that.heartindex++;
                })()
            }, 0);

        }
    }
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
    }

    .editormd-preview-container, .editormd-html-preview{
        width: auto;
    }

    .heart{
        z-index: 999;
        width: 20px;
        height: 20px;
        transform: rotate(-45deg);
        position: relative;
        opacity:1;
        transition: top .8s,opacity .8s;
    }
    .heart:before {
        content: "";
        position:absolute;
        top: -10px;
        left: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .heart:after{
        content: "";
        position: absolute;
        top: 0px;
        left: 10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    .heartcolor1{
        background: red;
    }
    .heartcolor1:before{
        background: red;
    }
    .heartcolor1:after{
        background: red;
    }
    .heartcolor2{
        background: plum;
    }
    .heartcolor2:before{
        background: plum;
    }
    .heartcolor2:after{
        background: plum;
    }
    .heartcolor3{
        background: tomato;
    }
    .heartcolor3:before{
        background: tomato;
    }
    .heartcolor3:after{
        background: tomato;
    }
    .heartcolor4{
        background: rgb(64, 158, 255);
    }
    .heartcolor4:before{
        background: rgb(64, 158, 255);
    }
    .heartcolor4:after{
        background: rgb(64, 158, 255);
    }
    .heartcolor5{
        background: rgb(243, 7, 211);
    }
    .heartcolor5:before{
        background: rgb(243, 7, 211);
    }
    .heartcolor5:after{
        background: rgb(243, 7, 211);
    }
</style>