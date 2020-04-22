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
  height: 100%;
  overflow: auto;
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
      flex: 2;
  }
  .contentRight{
      flex: 1;
  }
}
</style>
