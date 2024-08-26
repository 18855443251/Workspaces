 <template>
  <div>
    <div>获取地图距离,经度，纬度</div>
    <div v-for="(item, index) in dataList" :key="index">{{ item.distance }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: 28.693739,
      longitude: 115.996632,
      dataList: [
        {
          latitude: 28.701598,
          longitude: 115.979295,
        },
        {
          latitude: 28.675380,
          longitude: 115.995420,
        },
         {
          latitude: 28.679180,
          longitude: 116.013060,
        },
      ],
    };
  },
  created() {
    this.queryBranchByCityCode();
  },
  methods: {
    queryBranchByCityCode() {
      this.dataList.forEach((item, index) => {
        this.$set(
          item,
          "distance",
          this.getDistance(
            item.latitude,
            item.longitude,
            this.latitude,
            this.longitude
          )
        );
      });
    },

    getDistance(lat1, lng1, lat2, lng2) {
      let arr1 = this.bd09togcj02(lng1, lat1);
      var radLat1 = (arr1[1] * Math.PI) / 180.0;
      var radLat2 = (lat2 * Math.PI) / 180.0;
      var a = radLat1 - radLat2;
      var b = (arr1[0] * Math.PI) / 180.0 - (lng2 * Math.PI) / 180.0;
      var s =
        2 *
        Math.asin(
          Math.sqrt(
            Math.pow(Math.sin(a / 2), 2) +
              Math.cos(radLat1) *
                Math.cos(radLat2) *
                Math.pow(Math.sin(b / 2), 2)
          )
        );
      s = s * 6378.137;
      s = Math.round(s * 10000) / 10000;
      console.log()
      if (s < 1) {
        return s;
      } else if (s > 100) {
        s = this.getBit(s, -1);
        return s;
      } else {
        s = this.getBit(s, 1);
        return s;
      }
    },
    /**
     * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
     * 即 百度 转 谷歌、高德
     */
    bd09togcj02(bd_lon, bd_lat) {
      var x_PI = (3.14159265358979324 * 3000.0) / 180.0;
      var PI = 3.1415926535897932384626;
      var a = 6378245.0;
      var ee = 0.00669342162296594323;
      var x_pi = (3.14159265358979324 * 3000.0) / 180.0;
      var x = bd_lon - 0.0065;
      var y = bd_lat - 0.006;
      var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
      var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
      var gg_lng = z * Math.cos(theta);
      var gg_lat = z * Math.sin(theta);
      return [gg_lng, gg_lat];
    },
    /**
     * @method 截取小数点后1位,
     */
    getBit(value, bit = 1) {
      let str = value.toString();
      let strIndex = str.indexOf(".");
      if (strIndex === -1) return str;
      str = str.substr(0, strIndex + 1 + bit);
      return str;
    },
  },
};
</script>

<style scoped></style>