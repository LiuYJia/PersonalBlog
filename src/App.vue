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
  color: #343434;
  padding: 0;
  margin: 0;
}
</style>
