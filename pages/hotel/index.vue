<template>
 <section class="contianer">
<el-breadcrumb separator=">" class="mianbao">
<el-breadcrumb-item>酒店</el-breadcrumb-item>
  <el-breadcrumb-item>南京酒店预订</el-breadcrumb-item>
</el-breadcrumb>
<el-form class="search-form-content" ref="form">
  <el-form-item>
        <!-- fetch-suggestions 返回输入建议的方法 -->
        <!-- select 点击选中建议项时触发 -->
        <el-autocomplete
          placeholder="目的地"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
      <el-date-picker
      class="datas"
      type="daterange"
      range-separator="-"
      start-placeholder="入住日期"
      end-placeholder="离店日期">
    </el-date-picker>
    <el-form-item class="perpole">
    <el-select  placeholder="人数未定">
      <el-option value="shanghai">
        每间  
        
      </el-option>
      <el-option value="beijing">
         <el-form-item class="btn">
    <el-button type="primary" >确定</el-button>
   
  </el-form-item>
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item class="btns">
    <el-button type="primary" >查看价格</el-button>
   
  </el-form-item>
</el-form>
<Gaode/>
<Shaixuan/>
 </section>
</template>

<script>
import Gaode from "@/components/hotel/gaode"
import Shaixuan from "@/components/hotel/shaixuan"
export default {
  components:{
    Gaode,
    Shaixuan
  },
  mounted(){
   this.$axios({
     url:"/hotels"
   }).then(res=>{
     console.log( res.data);
     
   })
  }
}
</script>

<style lang="less" scoped>
  .contianer{
    width: 1000px;
  margin: 0 auto;
  }
  .mianbao{
    padding :20px 0;
  }
  .search-form-content{
    display: flex;
  }
  .el-autocomplete{
    margin-right:10px;
   flex:20%;
  }
  .datas{
    margin-right:10px;
    flex:30%;
  }
  .perpole{
    margin-right:15px;

  }
  .btns{
    margin-right:105px;
  }
</style>