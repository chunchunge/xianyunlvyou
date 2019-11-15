<template>
  <section class="contianer">
      <div class="nav">
          <div class="hotCity"><span> 热门城市</span></div>
          <div class="recommendCity"><span>推荐城市</span></div>
          <div class="islandCity"><span>奔向海岛</span></div>
          <div class="subjectCity"><span>主题推荐</span></div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.contianer {
  width: 1000px;
  margin: 20px auto;
}
.nav{
    width: 260px;
    border-left: 1px solid #ddd;
    border-top: 1px solid #ddd;
    >div{
        
            height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    position: relative;
    box-sizing: border-box;
    width: 260px;
    :hover{
            color:orange;
        }
        :after {
    display: block;
    content: "";
    width: 10px;
    height: 10px;
    border-right: 1px solid #999;
    border-top: 1px solid #999;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    right: 20px;
    top: 15px;
}
    }
}
</style>