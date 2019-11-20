<template>
  <section class="contianer">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/hotel' }">酒店</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/hotel' }">南京酒店</el-breadcrumb-item>
      <el-breadcrumb-item>好来阁商务宾馆</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="name-info el-row">
      <div class="el-col el-col-24">
        <div class="el-row">
          <h4 class="hotel-cn-name">
            好来阁商务宾馆
            <span title="[object Object]星级">
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
              <i class="iconfont iconhuangguan"></i>
            </span>
          </h4>
        </div>
        <div class="el-row">
          <span class="hotel-en-name">hao lai ge shang wu hotel</span>
        </div>
        <div class="el-row dizi">
          <i class="iconfont iconlocation"></i>高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </div>
    </div>
    <div class="pic-info info-row el-row">
      <div class="photo-view el-row">
        <div class="main-pic el-col el-col-16 ">
         <div class="dtu"></div>
          <span class="summary"></span>
        </div>
        <div class="list-pics el-col el-col-8">
          <div class="list-item el-row" style="margin-left: -10px; margin-right: -10px;">
            <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
              <a href="javascript:void(0)">
                  <div class="xtu"></div>
              </a>
            </div>
            <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
              <a href="javascript:void(0)">
               <div class="xtu"></div>
              </a>
            </div>
            <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
              <a href="javascript:void(0)">
               <div class="xtu"></div>
              </a>
            </div>
            <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
              <a href="javascript:void(0)">
                <div class="xtu"></div>
              </a>
            </div>
            <div class="el-col el-col-12 " style="padding-left: 10px; padding-right: 10px;">
              <a href="javascript:void(0)">
                <div class="xtu"></div>
              </a>
            </div>
            <div class="el-col el-col-12" style="padding-left: 10px; padding-right: 10px;">
              <a href="javascript:void(0)">
               <div class="xtu"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.contianer {
  width: 1000px;
  margin: 20px auto;
}
.bread {
  margin-bottom: 20px;
}
.hotel-cn-name {
  color: #333;
  font-weight: 400;
  font-size: x-large;
}
.iconhuangguan {
  color: orange;
}
.hotel-en-name,
.dizi {
  font-size: 14px;
  color: #666;
}
.btu{
    background: skyblue;
    height:360px;
     width:640px;
}
.xtu{
    background: pink;
    width:160px;
}
a{
    display: block;
}
</style>