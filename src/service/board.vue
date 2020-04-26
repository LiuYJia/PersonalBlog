<template>
    <div class="board">
        <div class="contentBox">
            <div class="contentLeft">

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                    <el-row :gutter="25">
                        <el-col :span="12">
                            <el-form-item label="称呼" prop="name">
                                <el-input v-model="ruleForm.name" placeholder="请输入称呼"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="邮箱" prop="contact">
                            <el-input v-model="ruleForm.contact" placeholder="请输入您的邮箱"></el-input>
                        </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="内容"  prop="content">
                        <el-input type="textarea" rows="5" v-model="ruleForm.content"  placeholder="请输入想要说的话"></el-input>
                    </el-form-item>
                    <el-form-item class="boardSave">
                        <el-button type="primary" icon="el-icon-circle-check" plain @click="save" size="small">保存</el-button>
                    </el-form-item>
                </el-form>

                <el-divider></el-divider>

                <div class="boardBlock-item" v-for="item in boardArr">
                    <div># {{item.name}}<span>{{item.date}}</span></div>
                    <div class="boardBlock-itemtext">{{item.content}}</div>
                </div>

            </div>
            <div class="contentRight">

                <div># Tips</div>
                <el-divider></el-divider>
                欢迎分享讨论

            </div>
        </div>
    </div>
</template>
<script>
import boardapi from '../api/board.js'
export default {
    data(){
        var checkName = function(rule, value, callback){
            if(!value){
                callback(new Error('请输入称呼'))
                return;
            }
            var regEn = /[`!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
            if(regEn.test(value) || regCn.test(value)) {
                callback(new Error('不可输入特殊字符'))
                return;
            }else{
                callback()
            }
        };
        var checkContact= function(rule, value, callback){
            console.log(value)
            if(!value){
                callback(new Error('请输入您的邮箱'))
                return;
            }
            var regEn = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            if(!regEn.test(value)) {
                callback(new Error('格式错误'))
                return;
            }else{
                callback()
            }
        };
        var checkContent= function(rule, value, callback){
            console.log(value)
            if(!value){
                callback(new Error('请输入想要说的话'))
                return;
            }
            var regEn = /[`!@#$%^&*()_+<>?:"{},.\/;'[\]]/im,
            regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im;
            if(regEn.test(value) || regCn.test(value)) {
                callback(new Error('不可输入特殊字符'))
                return;
            }else{
                callback()
            }
        };
        return{
            ruleForm:{
                name:'',
                contact:'',
                content:''
            },
            boardArr:[],
            rules:{
                name: [
                    { validator: checkName, trigger: 'blur' }
                ],
                contact: [
                    { validator: checkContact, trigger: 'blur' }
                ],
                content: [
                    { validator: checkContent, trigger: 'blur' }
                ]
            }
        }
    },
    created(){
        this.getBoardList()
    },
    mounted(){
    },
    methods:{
        getBoardList(){
            var that = this;
            boardapi.getBoard().then(function(d){
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
        save(){
            var that = this;
            this.$refs.ruleForm.validate((valid) => {
                if(!valid){
                    this.$message({
                            message: '请完善信息',
                            type: 'error'
                        }
                    );
                }else{
                    console.log(that.ruleForm)
                    boardapi.saveBoard(that.ruleForm).then(function(d){
                        if(d.code==200){
                        }
                    })
                }
            })
        }
    }
}
</script>
<style>
    .board{
        height: calc(100% - 61px);
        overflow: auto;
        color: #909399;
    }
    .board .boardSave {
        text-align: right;
    }
    .board .boardBlock-item{
        margin-bottom: 20px;
    }
    .board .boardBlock-item span{
        font-size: 12px;
        margin-left: 12px;
    }
    .board .boardBlock-itemtext{
        border-left: 3px solid #DCDFE6;
        padding: 0px 10px;
        margin-top: 10px;
    }
</style>