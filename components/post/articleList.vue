<template>
  <section class="contianer">
    <div v-for="(item,index) in dataList" :key="index">
      <div class="list" v-if="list[index].images.length >= 3">
        <div>
          <div class="h">
            <h4>{{item.title}}</h4>
          </div>
          <p class="text">{{item.summary}}</p>
          <div class="imgs">
            <div class="img">
              <img :src="item.images[0]" />
            </div>
            <div class="img">
              <img :src="item.images[1]" />
            </div>
            <div class="img">
              <img :src="item.images[2]" />
            </div>
          </div>
          <div class="jiaobiao">
            <div class="left">
              <span>
                <i class="el-icon-location-outline"></i>
                {{item.city.name}}
              </span>
              <span>by</span>
              <div class="touxiang">
                <img :src=" $axios.defaults.baseURL +item.account.defaultAvatar" alt />
              </div>
              <span class="nicheng">{{item.account.nickname}}</span>
              <span>
                <i class="el-icon-view"></i>
                {{item.watch}}
              </span>
            </div>
            <div class="right">
              <span class="zhan" v-if="item.like==null">0 赞</span>
              <span class="zhan" v-else>{{item.like}} 赞</span>
            </div>
          </div>
        </div>
      </div>
      <div class="list1" v-if="list[index].images.length < 3">
        <div class="imgs">
          <img :src="item.images[0]" />
        </div>
        <div class="rights">
          <div class="h">
            <h4>{{item.title}}</h4>
          </div>
          <p class="text">{{item.summary}}</p>
          <div class="jiaobiao">
            <div class="left">
              <span>
                <i class="el-icon-location-outline"></i>
                {{item.city.name}}
              </span>
              <span>by</span>
              <div class="touxiang">
                <img :src=" $axios.defaults.baseURL +item.account.defaultAvatar" alt />
              </div>
              <span class="nicheng">{{item.account.nickname}}</span>
              <span>
                <i class="el-icon-view"></i>
                {{item.watch}}
              </span>
            </div>
            <div class="right">
              <span class="zhan" v-if="item.like==null">0 赞</span>
              <span class="zhan" v-else>{{item.like}} 赞</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <span v-show="false">{{allPrice}}</span>
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
        :page-sizes="[3, 6, 9, 12]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="list.length"
      ></el-pagination>
    </el-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      pageIndex: 1, // 当前页数
      pageSize: 3, // 显示条数
      dataList: [],
      city: ""
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    allPrice() {
      this.city = this.$store.state.post.city;
      console.log(this.city);
    }
  },
  methods: {
    getData() {
      this.$axios({
        url: "/posts"
      }).then(res => {
        const { data } = res.data;
        this.list = data;
        this.setDataList();
      });
    },
    setDataList() {
      const start = (this.pageIndex - 1) * this.pageSize;
      const end = start + this.pageSize;
      this.dataList = this.list.slice(start, end);
      console.log(this.dataList);
    },

    // 切换条数时触发
    handleSizeChange(value) {
      this.pageSize = value;
      this.pageIndex = 1;
      if (this.city == null) {
        this.setDataList();
      }else{
        this.dataList.forEach((e,index)=>{
          if(e[index].city.name==this.city){
            this.setDataList();
          }else{
            return;
          }
        })
      }
    },

    // 切换页数时触发
    handleCurrentChange(value) {
      this.pageIndex = value;
      this.setDataList();
    }
  }
};
</script>

<style lang="less" scoped>
.contianer {
  width: 700px;
  height: 1000px;
  margin: -30px 0 0 560px;
}
.list {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  .imgs {
    margin-top: 15px;
    display: flex;
  }
  .img {
    width: 220px;
    height: 150px;
    flex: 33%;
    margin-right: 13px;
  }
}
.list1 {
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-top: 20px;
  .imgs {
    flex: 140%;
    margin-right: 12px;
  }
}

.h {
  :hover {
    color: orange;
  }
}
h4 {
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 15px;
  overflow: hidden;
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
.jiaobiao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  .left {
    flex: 1;
    position: relative;
    .nicheng {
      margin-left: 20px;
    }
  }
  .zhan {
    font-size: 16px;
    color: orange;
  }

  .rights {
    padding: 10px;
  }
}
.touxiang {
  width: 16px;
  height: 16px;

  position: absolute;
  top: 6px;
  left: 90px;
  border-radius: 50%;
}
img {
  width: 100%;
  height: 100%;
}
span {
  margin-right: 10px;
  font-size: 12px;
  color: #999;
}
</style>