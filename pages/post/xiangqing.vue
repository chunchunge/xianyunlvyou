<template>
  <section class="contianer">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/post' }">旅游攻略</el-breadcrumb-item>
        <el-breadcrumb-item>攻略详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="title">
        <h1>{{data.title}}</h1>
        <div class="post-info">
          <span>攻略：2019-05-22 10:57</span>
          <span>阅读：10090</span>
        </div>
      </div>
      <div class="main" v-html="data.content"></div>
      <div class="post-ctrl">
        <div class="el-row is-justify-center el-row--flex">
          <div class="ctrl-item">
            <i class="iconfont iconpinglun"></i>
            <p>评论(100)</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconstar1"></i>
            <p>收藏</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconfenxiang"></i>
            <p>分享</p>
          </div>
          <div class="ctrl-item">
            <i class="iconfont iconding"></i>
            <p>
              <span v-if="data.like==null">点赞 0</span>
              <span v-else>点赞 {{data.like}}</span>
            </p>
          </div>
        </div>
      </div>
      <Pinglun />
    </div>
    <div class="right">
      <h4 class="about">相关攻略</h4>
      <div class="recommend-list">
        <div class="post-imgText">
          <div class="post-img">
            <img src="@/assets/images/pic_sea.jpeg" alt />
          </div>
          <div class="post-text">
            <div>发表攻略</div>
            <p>2019-11-18 9:14 阅读 3</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Pinglun from "@/components/post/pinglun";
export default {
  components: {
    Pinglun
  },
  data() {
    return {
      data: {}
    };
  },
  mounted() {
    // 首先解构query带来的参数
    const { query } = this.$route;
    this.$axios({
      url: `posts`,
      params: {
        id: query.id
      }
    }).then(res => {
      const { data } = res.data;
      this.data = data[0];
      console.log(this.data);
      console.log(this.data.content);
      var main = document.querySelector(".main");
    });
  }
};
</script>

<style lang="less" scoped>
.contianer {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  .left {
    width: 700px;
    .title {
      h1 {
        padding: 15px 0;
        border-bottom: 1px solid #eee;
      }
      .post-info {
        color: #999;
        padding: 20px;
        text-align: right;
      }
    }

    .post-ctrl {
      padding: 50px 0 30px;
      .ctrl-item {
        margin: 0 20px;
        font-size: 20px;
        text-align: center;
        cursor: pointer;
        .iconfont {
          display: block;
          font-size: 28px;
          color: orange;
        }
        > p {
          margin-top: 5px;
          font-size: 14px;
          color: #999;
        }
      }
    }
  }

  .right {
    width: 280px;
    .about {
      font-weight: 400;
      font-size: 18px;
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;

      .post-img {
        width: 100px;
        height: 80px;
        flex-shrink: 0;
        background: #ddd;
        overflow: hidden;
        margin-right: 10px;
      }
    }
  }
}
// 深度选择器
.main /deep/  img {
  width: 100%;
  height: 100%;
  padding: 10px 0;
}

img {
  width: 100px;
  height: 80px;
  object-fit: cover;
}
.post-imgText {
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
.post-text {
  flex: 1;
  position: relative;
  margin-left:10px;
  > div {
    line-height: 1.4em;
    height: 2.8em;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
  > p {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 12px;
    color: #999;
  }
}
</style>