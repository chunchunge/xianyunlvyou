<template>
  <div class="list el-col">
    <div class="one el-col el-col-8">
      <div class="price">
        <span>价格</span>
        <span>0-{{numss}}</span>
      </div>
      <el-slider :format-tooltip="formatTooltip" v-model="nums"></el-slider>
    </div>
    <div class="two el-col el-col-4">
      <p>住宿等级</p>
      <el-dropdown class="xia">  
        <span class="el-dropdown-link lefts">
          <span> 不限</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="iconfont iconcircle"></i> 1星</el-dropdown-item>
          <el-dropdown-item><i class="iconfont iconcircle"></i> 2星</el-dropdown-item>
          <el-dropdown-item><i class="iconfont iconcircle"></i> 3星</el-dropdown-item>
          <el-dropdown-item><i class="iconfont iconcircle"></i> 4星</el-dropdown-item>
          <el-dropdown-item><i class="iconfont iconcircle"></i> 5星</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="three el-col el-col-4">
      <p>住宿类型</p>
      <el-dropdown class="xia">
        <span class="el-dropdown-link lefts">
           <span> 不限</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="four el-col el-col-4">
      <p>酒店设施</p>
      <el-dropdown class="xia">
        <span class="el-dropdown-link lefts">
          <span> 不限</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="five el-col el-col-4">
      <p>酒店品牌</p>
      <el-dropdown class="xia">
        <span class="el-dropdown-link lefts">
           <span> 不限</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nums: 4000,
      numss: 0
    };
  },
  components() {
    if (nums == 4000) {
      nums = this.nums;
    }
    console.log(this.nums);
  },
  methods: {
    formatTooltip(val) {
      this.numss = val * 40;
      return val * 40;
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  border: 1px solid #ddd;
  padding-top: 15px;
  color: #666;
  height: 80px;
  
}
.one{
  padding: 0 20px;
}
.two,
.three,
.four,
.five {
  padding: 0 20px;
  height: 60px;
        
}
.one,
.two,
.three,
.four {
  border-right: 1px solid #eee;
}
.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.xia{
  margin-top:20px;
}
.lefts{
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  
}
</style>