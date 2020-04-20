<template>
  <div class="hello">
      <span id="info"></span>
  </div>
</template>

<script>
import test from '../api/test.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    test.getOneMsg().then(function(d){
      console.log(d)
    })
    this.getCity()
  },
  methods:{
    getCity(){
      var that = this;
      // AMap.plugin('AMap.Geolocation', function() {
      //   var geolocation = new AMap.Geolocation({
      //       enableHighAccuracy: true,//是否使用高精度定位，默认:true
      //       timeout: 10000,          //超过10秒后停止定位，默认：5s
      //       buttonPosition:'RB',    //定位按钮的停靠位置
      //       buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      //       zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

      //   });
      //   geolocation.getCurrentPosition(function(status,result){
      //     console.log(result)
      //     that.getWeather(result.addressComponent.district)
      //   });
      // });
      AMap.plugin('AMap.CitySearch', function () {
        var citySearch = new AMap.CitySearch()
        citySearch.getLocalCity(function (status, result) {
          console.log(result)
          that.getWeather(result.city)
        })
      })
    },

    getWeather(d){
      AMap.plugin('AMap.Weather', function() {
                var weather = new AMap.Weather();
                weather.getLive(d, function(err, data) {
                  console.log(data)
                    // province
                    // 省份名
                    // city
                    // 城市名
                    // adcode
                    // 区域编码
                    // weather
                    // 天气预报，详见天气预报列表
                    // temperature
                    // 实时气温，单位：摄氏度
                    // windDirection
                    // 风向，风向编码对应描述
                    // windPower
                    // 风力，风力编码对应风力级别，单位：级
                    // humidity
                    // 空气湿度（百分比）
                    // reportTime
                    // 数据发布的时间
                })
              })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
