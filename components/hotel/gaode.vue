<template>
  <section class="contianer">
    <div class="el-col el-col-14">
      <div class="el-col el-col-24" style="padding-left: 5px; padding-right: 5px;">
        <div class="search-options el-row">
          <div class="option-row el-row el-row--flex">
            <div class="el-col el-col-3">区域：</div>
            <div class="el-col el-col-24 hidden-all">
              <div class="scenics-box">
                <a href="#">全部</a>
                <a>镇兴路沿线</a>
                <a>视觉艺术学院</a>
                <a>大成名店</a>
                <a>南京西站</a>
                <a>铜山镇</a>
                <a>大桥南路</a>
                <a>宝塔路沿线</a>
                <a>宝塔路/万辰苏果</a>
                <a>珠江路沿线</a>
                <a>华侨城</a>
                <a>江浦</a>
                <a>东屏镇</a>
                <a>南京南站/明发</a>
                <a>北岭路沿线</a>
                <a>苜蓿园</a>
                <a>弘阳广场/新一城</a>
                <a>新街口地区</a>
                <a>紫金山/孝陵卫</a>
                <a>火车站/玄武湖</a>
                <a>东坝镇</a>
                <a>禄口机场</a>
                <a>奥体中心</a>
                <a>雨润大街</a>
                <a>新模范马路</a>
                <a>将军山</a>
                <a>国际慢城</a>
                <a>云鼎时尚街区</a>
                <a>百家湖</a>
                <a>湖南路</a>
                <a>竹山路沿线</a>
                <a>南大/南师大</a>
                <a class="location-budget active">江宁滨江开发区</a>
                <a>湖熟镇</a>
                <a>南大和园</a>
                <a>君临紫金商业街</a>
                <a>大西门</a>
                <a>建邺万达</a>
                <a>江宁科学园</a>
                <a>顾家欧亚达</a>
                <a>高淳老街</a>
                <a>谷里</a>
                <a>汤山镇</a>
                <a>雄州</a>
              </div>
              <a href="#">
                <i class="el-icon-d-arrow-right" @click="zhankai"></i>
                等43个区域
              </a>
            </div>
          </div>
          <div class="option-row el-row el-row--flex">
            <div class="el-col el-col-3">攻略:</div>
            <div class="el-col el-col-24">
              北京，你想要的都能在这找到。博古通今，兼容并蓄，天下一城，如是帝都。
              景点以故宫为中心向四处辐射；地铁便宜通畅，而且覆盖绝大多数景点。
              由于早上有天安门升旗仪式，所以大多数人选择在天安门附近住宿。
            </div>
          </div>
          <div class="option-row price-row el-row el-row--flex">
            <div class="el-col el-col-3">
              均价
              <sup
                class="question-mark el-tooltip"
                aria-describedby="el-tooltip-1738"
                tabindex="0"
              >?</sup>
              :
            </div>
            <div class="el-col el-col-24">
              <div class="el-row el-row--flex">
                <div class="el-col el-col-8">
                  <span class="el-tooltip" aria-describedby="el-tooltip-2090" tabindex="0">
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <span class="price-budget">¥332</span>
                  </span>
                </div>
                <div class="el-col el-col-8">
                  <span class="el-tooltip" aria-describedby="el-tooltip-4814" tabindex="0">
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <span class="price-budget">¥521</span>
                  </span>
                </div>
                <div class="el-col el-col-8">
                  <span class="el-tooltip" aria-describedby="el-tooltip-5783" tabindex="0">
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <i class="iconfont iconhuangguan"></i>
                    <span class="price-budget">¥768</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="container" class="el-col el-col-10">></div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.onLoad = function() {
      var map = new AMap.Map("container");
    };
    var url =
      "https://webapi.amap.com/maps?v=1.4.15&key=d431767a7059bb7f11d4582bc3d79506&callback=onLoad";
    var jsapi = document.createElement("script");
    jsapi.charset = "utf-8";
    jsapi.src = url;
    document.head.appendChild(jsapi);
  },
  methods:{
    zhankai(){
      var dian=document.querySelector(".scenics-box");
      var sss=document.querySelector(".contianer");
      if(dian.style.maxHeight==="100em"){
        dian.style.maxHeight = "3em";
        sss.style.paddingBottom = "20px";
      }else{
        sss.style.paddingBottom = "50px";
        dian.style.maxHeight = "100em";
      }
      
     
    }
  }
};
</script>
<style lang="less" scoped>
.contianer {
    margin-right: 1em;
    padding: 0 2px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    color:#999;
  width: 1000px;
  height: 260px;
  padding-bottom: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.scenics-box{
      max-height: 3em;
    overflow: hidden;
}
.el-icon-d-arrow-right{
  color:orange;
}
a{
  margin-right: 1em;
    padding: 0 2px;
    border-radius: 4px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
}
.question-mark{
      background-color: #ccc;
    color: #fff;
    display: inline-block;
    width: 1.2em;
    height: 1.2em;
    text-align: center;
    border-radius: 100%;
}
.option-row{
  margin-bottom: 15px;
  padding-right:10px;
}
.el-tooltip{
      font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    font-size: 14px;
    .iconhuangguan{
      color:orange;
    }
}
</style>