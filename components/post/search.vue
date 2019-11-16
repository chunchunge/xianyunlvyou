<template>
  <section class="contianer">
    <div class="searchs">
      <input type="text" class="text" placeholder="请输入想去的地方，比如 “ 广州 ” " />
      <i class="el-icon-search"></i>
    </div>
    <div class="tuijian">
      推荐 ：
      <span>广州</span>
      <span>上海</span>
      <span>北京</span>
    </div>
    <div class="tuijiangonglv">
      <h4>推荐攻略</h4>
      <el-row>
          <el-button type="primary"> 
              <i class="el-icon-edit"></i>
          写游记
          </el-button>
      
      </el-row>
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
  position: absolute;
  top: 56px;
  left: 555px;
  width: 700px;
  height: 40px;
  border: 2px solid orange;
  box-sizing: border-box;
  background: none;
  .text {
    flex: 1;
    padding: 0 20px;
    line-height: 35px;
    outline: none;
    border: none;
    width: 600px;
  }
  .el-icon-search {
    display: block;
    position: absolute;
    top: 7px;
    right: -1px;
    font-size: 24px;
    color: orange;
    font-weight: 700;
    margin-right: 10px;
  }
  .tuijian {
    padding: 10px 0;
    font-size: 12px;
    color: #666;
  }
  span {
    padding-left: 2px;
  }
  .tuijiangonglv {

   margin-top:10px;
    color: #666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    h4 {
      font-size: 18px;
      color: orange;
      font-weight: 400;
      display: block;
      border-bottom: 2px solid orange;
    padding-bottom: 20px;
    }
  }
}
</style>