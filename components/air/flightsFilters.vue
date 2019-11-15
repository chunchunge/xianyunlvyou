<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{data.info.departCity}} - {{data.info.destCity}}
        /
        {{data.info.departDate}}
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airport" placeholder="起飞机场">
          <el-option
            v-for="(item, index) in data.options.airport"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="flightTimes" placeholder="起飞时间">
          <el-option
            v-for="(item, index) in data.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="company" placeholder="航空公司">
          <el-option
            v-for="(item, index) in data.options.company"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select size="mini" v-model="airSize" placeholder="机型">
          <el-option
            v-for="(item, index) in sizeOptions"
            :key="index"
            :label="item.name"
            :value="item.size"
          ></el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button type="primary" round plain size="mini"
       @click="handleFiltersCancel">撤销</el-button>
    </div>
    <!-- 只是为了单纯触发computed的函数调用，不需要显示内容 -->
        <span v-show="false">{{filter}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeOptions: [
        { name: "大", size: "L" },
        { name: "中", size: "M" },
        { name: "小", size: "S" }
      ],
      airport: "", // 机场
      flightTimes: "", // 出发时间
      company: "", // 航空公司
      airSize: "" // 机型大小
    };
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  computed:{
    filter(){
      let arr=[];
      arr=this.data.flights.filter(v=>{
        // 假设所有数据都是符合条件的
        let valid=true;
        //开始和出发的事件段
        const [start,end]=this.flightTimes.split(",");
        // 航班出发的小时
        const current =+v.dep_time.split(":")[0];
        // 然后找出不符合条件的
        if(this.airport && this.airport !=v.org_airport_name||this.company && this.company !=v.airline_name|| this.airSize && this.airSize !=v.plane_size|| this.flightTimes&& !(+start<=current && current < +end)){
          valid=false;
        }
        return valid;
      })
       // 触发传递的事件，修改dataList
            this.$emit("setDataList", arr)
            // 随便return的；
            return "";
    }
  },
  methods: {
    // 撤销条件时候触发
    handleFiltersCancel() {
      this.airport = "";
      this.flightTimes = "";
      this.company = "";
      this.airSize = "";
      this.$emit("setDataList", this.data.flights);
    }
  }
};
</script>

<style scoped lang="less">
.filters {
  margin-bottom: 20px;
}

.filters-top {
  > div {
    /deep/ .el-select {
      margin-left: 10px;
    }
  }
}

.filter-cancel {
  margin-top: 10px;
}
</style>