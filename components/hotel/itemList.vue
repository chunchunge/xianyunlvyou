<template>
  <div class="lists el-col">
    <div class="left el-col-7">
      <div class="img"></div>
    </div>
    <div class="main el-col-11">
      <div class="el-col el-col-24">
        <h4 class="hotel-cn-name">
          <a href="#" class>好来阁商务宾馆</a>
        </h4>
        <div class="hotel-en">
          <span>hao lai ge shang wu hotel</span>
          <span title="3星级">
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
            <i class="iconfont iconhuangguan"></i>
          </span>
          <span>经济型</span>
        </div>
        <div class="el-row el-row--flex">
          <div class="el-col el-col-10">
            <div
              role="slider"
              aria-valuenow="3.5"
              aria-valuetext="3.5分"
              aria-valuemin="0"
              aria-valuemax="5"
              tabindex="0"
              class="el-rate rate-budget"
            >
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(247, 186, 42);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <i
                    class="el-rate__decimal el-icon-star-on"
                    style="color: rgb(247, 186, 42); width: 50%;"
                  ></i>
                </i>
              </span>
              <span class="el-rate__item" style="cursor: auto;">
                <i class="el-rate__icon el-icon-star-on" style="color: rgb(239, 242, 247);">
                  <!---->
                </i>
              </span>
              <span class="el-rate__text" style="color: rgb(255, 153, 0);">3.5分</span>
            </div>
          </div>
          <div class="el-col el-col-7">
            <span class="height-light">3</span> 条评价
          </div>
          <div class="el-col el-col-7">
            <span class="height-light">16</span> 篇游记
          </div>
        </div>
        <div class="hotel-summary-row"></div>
        <div class="location-row">
          <i class="iconfont iconlocation"></i>位于: 高淳县淳溪镇镇兴路118号(高淳县委党校对面)
        </div>
      </div>
    </div>
    <div class="right el-col-6">
      <div class="el-table__body-wrapper is-scrolling-none">
        <table
          cellspacing="0"
          cellpadding="0"
          border="0"
          class="el-table__body"
          style="width: 234px;"
        >
          <tbody>
            <tr class="el-table__row product-row">
              <td rowspan="1" colspan="1" class="el-table_1_column_1">
                <div class="cell">携程</div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_1_column_2">
                <div class="cell">
                  <span class="height-light larger">￥85</span>起
                  <i class="el-icon-arrow-right"></i>
                </div>
              </td>
            </tr>
            <tr class="el-table__row product-row">
              <td rowspan="1" colspan="1" class="el-table_1_column_1">
                <div class="cell">艺龙</div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_1_column_2">
                <div class="cell">
                  <span class="height-light larger">￥41</span>起
                  <i class="el-icon-arrow-right"></i>
                </div>
              </td>
            </tr>
            <tr class="el-table__row product-row">
              <td rowspan="1" colspan="1" class="el-table_1_column_1">
                <div class="cell">Hotels.com</div>
              </td>
              <td rowspan="1" colspan="1" class="el-table_1_column_2">
                <div class="cell">
                  <span class="height-light larger">￥81</span>起
                  <i class="el-icon-arrow-right"></i>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.lists {
  height: 265px;
  padding: 25px 0;
  border-bottom: 1px solid #999;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.img {
  width: 280px;
  height: 210px;
  background: skyblue;
}
.hotel-cn-name {
  font-weight: 400;
  font-size: x-large;
}
.iconhuangguan,
.height-light {
  color: orange;
}
.hotel-en {
  color: #999;
}
.location-row {
  color: #666;
  font-size: 14px;
}
.hotel-cn-name,
.hotel-cn,
.el-row--flex,
.location-row,
.hotel-summary-row {
  margin-bottom: 10px;
}
.product-row{
  cursor: pointer;
  
}
.el-table_1_column_1{
  padding: 12px 0;
    min-width: 0;
    box-sizing: border-box;
    text-overflow: ellipsis;
    vertical-align: middle;
    position: relative;
    text-align: left;
}
tbody>tr{
:hover{
    background: #dedede;
  }
  
}
td{
  border-bottom: 1px solid #ebeef5;
}
</style>