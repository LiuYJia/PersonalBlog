<template>
    <div class="home">
        <headers />
    </div>
</template>
<script>
// hidden-xs-only
// import 'element-ui/lib/theme-chalk/display.css';
import headers from '@/components/headers.vue';
export default {
    components:{headers},
    data(){
        return{
            test:1
        }
    },
    created(){
        this.testFunction()
    },
    methods:{
        testFunction(){
            console.log(111)
        }
    }
}
</script>
<style>
</style>