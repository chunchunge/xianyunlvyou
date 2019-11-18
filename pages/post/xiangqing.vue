<template>
  <section class="contianer">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      123
    </div>
  
  </section>
</template>

<script>
export default {
  mounted(){
    // 首先解构query带来的参数
    const { query } = this.$route;
    this.$axios({
       url: `posts`,
       params: {
         id:query.id
       }
    }).then(res=>{
      const {data} =res.data;
      console.log(res);
      console.log(query.id);
      
      
    })

    
  }
};
</script>

<style lang="less" scoped>
.contianer {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  .left{
    width: 700px;
  }
  .right{
    width: 280px;
  }
}
</style>