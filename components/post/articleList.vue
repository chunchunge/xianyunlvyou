<template>
  <section class="contianer">
    <div class="list">
        <div>

        <div class="h">
           <h4>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h4>
        </div>
     
      <p
        class="text"
      >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
      <div class="imgs">
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
      </div>
      <div class="jiaobiao">
        <div class="left">
          <span>
            <i class="el-icon-location-outline"></i>
            北京市
          </span>
          <span>by</span>
          <div class="touxiang"></div>
          <span class="nicheng">地球发动机</span>
          <span>
            <i class="el-icon-view"></i>
            9922
          </span>
        </div>
        <div class="right">
          <span class="zhan">66 赞</span>
        </div>
      </div>
      </div>
    </div>
    <div class="list">
        <div class="img1">
            
        </div>
      <div class="rights">
          <div class="h">
        <h4>塞班贵？一定是你的打开方式不对！6000块玩转塞班</h4>
          </div>
        <p
          class="text"
        >大家对塞班岛总存在着这样的误解，知道它是美属地盘，就理所当然地觉得这里的花费一定很高，花费高有高的玩法，那如果只有6000块的预算呢？要怎么玩？关于旅行这件事，我们要让钱花得更有道理，收下这份攻略，带你6000块花式玩转塞班。图：塞班岛。 by第5季旅游一、怎样用6000块玩转塞班？大多数出境游客人不做预算或最</p>
        <div class="jiaobiao">
          <div class="left">
            <span>
              <i class="el-icon-location-outline"></i>
              北京市
            </span>
            <span>by</span>
            <div class="touxiang"></div>
            <span class="nicheng">地球发动机</span>
            <span>
              <i class="el-icon-view"></i>
              9922
            </span>
          </div>
          <div class="right">
            <span class="zhan">66 赞</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted(){
    this.$axios({
      url:"/posts"
    }).then(res=>{
      console.log(res.data);
      
    })
  }
};
</script>

<style lang="less" scoped>
.contianer {
  width: 700px;
  height: 700px;

  margin: -30px 0 0 560px;

  .list {
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center; 
     cursor:pointer;
    .h{
      :hover{
        color:orange;
      }
    }
    h4 {
      font-weight: 500;
      font-size: 18px;
    
    }
    .text {
      margin: 20px 0 15px 0;
      line-height: 1.5;
      font-size: 14px;
      height: 63px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      color: #666;
    }
    .imgs {
      margin-top: 15px;
      display: flex;

      .img {
        width: 220px;
        height: 150px;
        background: skyblue;
        flex: 33%;
        margin-right: 13px;
      }
    }
    span {
      margin-right: 10px;
      font-size: 12px;
      color: #999;
    }
    .jiaobiao {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding-bottom: 20px;
      .left{
        position: relative;
        .nicheng{
          margin-left:20px;
        }
      }
      .zhan {
        font-size: 16px;
        color: orange;
      }
    }
  }
}
.img1{
    width: 952px;
    height: 150px;
    background: skyblue;
}
.rights{
    padding:10px;
}
.touxiang{
  width: 16px;
  height: 16px;
  background: skyblue;
  position: absolute;
  top:6px;
  left:90px;
  border-radius: 50%;
}
</style>