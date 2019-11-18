<template>
  <section class="contianer">
    <div class="left">
      <h2>发表新攻略</h2>
      <p class="title">分享你的个人游记，让更多人看到哦！</p>
      <el-form  ref="form" :model="form" >
        <el-form-item>
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>
        
        <el-form-item>
          <vue-editor v-model="form.conner"></vue-editor>
        </el-form-item> 
      
  <el-form-item class="xuanze" label="请选择城市">
      
    <el-input v-model="form.city" placeholder="请搜索游玩城市"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary">发表</el-button>
    <span>或者 <a href="#" class="caogao">保存到草稿</a></span>
  </el-form-item>
      </el-form>
    </div>
    <div class="right">
        <p class="biao">
           草稿箱 （ 0 ）
        </p>
       
    </div>
  </section>
</template>

<script>
// 导入富文本框
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  data() {
    return {
      form: { conner:"想的美", title:"",city:""}
        
      
    };
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
      width: 750px;
      height: 700px;
      .xuanze{
          width: 200px;
         

      }
  }
  .right{
      
      width: 200px;
      .biao{
           border:1px solid #666;
           padding:10px;
            font-size: 18px;
      }
  }
}
h2 {
  font-weight: 500;
}
.title {
  font-size: 12px;
  color: #999;
  padding: 10px 0;
}
.caogao{
    color :orange;
}
</style>