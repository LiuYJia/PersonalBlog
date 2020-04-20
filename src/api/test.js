import Axios from 'axios'
export default {

    getOneMsg:function(){
        return new Promise(function(resolve,reject){
            Axios({
                url:'http://localhost:3000/getOneMsg',
                method:'get',
                params:'',
            }).then(function(res){
                resolve(res.data)
            }).catch(function(error){
    
            })
        })
    }

}