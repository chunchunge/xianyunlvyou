<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>
          <FlightsFilters :data="cacheFlightsData" @setDataList="setDataList"/>
        </div>

        <!-- 航班头部布局 -->
        <FlightsListHead />

        <!-- 航班信息 -->
        <div>
          <!-- 航班列表 -->
          <FlightsItem v-for="(item, index) in dataList" :key="index" :data="item" />
          <!-- 分页 -->
          <el-row type="flex" justify="center" style="margin-top:10px;">
            <!-- size-change：切换条数时候触发 -->
            <!-- current-change：选择页数时候触发 -->
            <!-- current-page: 当前页数 -->
            <!-- page-size：当前条数 -->
            <!-- total：总条数 -->
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pageIndex"
              :page-sizes="[5, 10, 15, 20]"
              :page-size="pageSize"
              
              layout="total, sizes, prev, pager, next, jumper"
              :total="flightsData.total"
            ></el-pagination>
          </el-row>
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
         <FlightsAside/>
      </div>
    </el-row>
  </section>
</template>

<script>
import moment from "moment";
import FlightsAside from "@/components/air/flightsAside.vue"
import FlightsListHead from "@/components/air/flightsListHead.vue";
import FlightsItem from "@/components/air/flightsItem.vue";
import FlightsFilters from "@/components/air/flightsFilters.vue";
export default {
   watch: {
        $route(){
             this.getData();
        }
    },
  components: {
    FlightsListHead,
    FlightsItem,
    FlightsFilters,
    FlightsAside
  },
  data() {
    return {
      flightsData: {
        flights: [],
        info: {},
        options: {}
      }, // 航班总数据
      cacheFlightsData: { // 缓存一份数据，只会修改一次
                flights: [],     
                info: {},
                options: {}
            }, 
      dataList: [], // 航班列表数据，用于循环flightsItem组件，单独出来是因为要分页
      pageIndex: 1, // 当前页数
      pageSize: 5 // 显示条数
    };
  },
  methods: {
    // 获取航班总数据
    getData() {
      this.$axios({
        url: "airs",
        params: this.$route.query //获取来自url上的五个数据
      }).then(res => {
        this.flightsData = res.data;
        // 缓存一份新的列表数据数据，这个列表不会被修改
                // 而flightsData会被修改
                this.cacheFlightsData = {...res.data};
        this.setDataList(); // 初始化dataList数据，获取1 - 10条
      });
    },
    setDataList(arr) {
      // 如果有新数据从第一页开始显示
      if(arr){
        this.pageIndex=1;
        this.flightsData.flights=arr;
        this.flightsData.total=arr.length;
      }
      const start = (this.pageIndex - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.dataList = this.flightsData.flights.slice(start, end);
      console.log(this.flightsData.flights);
      
    },
    // 切换条数时触发的函数
    handleSizeChange(value) {
      this.pageSize = value;
      this.pageIndex = 1;
      this.setDataList();
    },
    // 切换页数时触发的函数
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.setDataList();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>