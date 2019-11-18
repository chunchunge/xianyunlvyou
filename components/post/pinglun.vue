<template>
  <div class="cmt-wrapper">
    <h4 class="cmt-title">评论</h4>
    <div class="cmt-input">
      <div class="el-textarea">
        <textarea
          autocomplete="off"
          placeholder="说点什么吧..."
          class="el-textarea__inner"
          style="resize: none; min-height: 33px;"
        ></textarea>
      </div>
    </div>
    <div class="cmt-tu">
      <div class="tu">
        <!-- 添加图片的组件 -->
        <el-upload
          action="http:127.0.0.1:1337/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <div class="btn">
        <el-row>
          <el-button type="primary">提交</el-button>
        </el-row>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-info">
          <div class="img"></div>
          <span class="one">保护敌方水晶</span>
          <i>2019-11-18 7:55</i>
          <span class="louceng">1</span>
        </div>
        <div class="el-row">
          <p></p>
          <div class="cmt-pic">
            <img src="../../assets/images/pic_sea.jpeg" alt style="width:78px;height:78px" />
          </div>
          <div class="cmt-ctrl">
            <a href="javascript:;">回复</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less" scoped>
.cmt-wrapper {
  margin-bottom: 20px;
  .cmt-title {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
  }
  .cmt-input {
    margin-bottom: 10px;
  }
  .cmt-tu {
    display: flex;
    justify-content: space-between;
  }
  .cmt-list {
    border: 1px solid #ddd;
    height: 358px;
    margin-top: 20px;
    .cmt-item {
      border-bottom: 1px dashed #ddd;
      padding: 20px 20px 5px;
      .cmt-info {
        margin-bottom: 10px;
        font-size: 12px;
        color: #666;
        position: relative;
        .one {
          margin-left: 20px;
        }
        .img {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: skyblue;
          position: absolute;
          top: 0;
          left: 0;
        }
        .louceng {
          float: right;
        }
        .el-row {
          width: 80px;
          height: 80px;
          box-sizing: border-box;
          
          
        }
      }
    }
  }
}
.cmt-ctrl {
            height: 20px;
            line-height: 20px;
            font-size: 12px;
            color: #1e50a2;
            text-align: right;
          }
.el-upload {
  width: 100px;
  height: 100px;
}
.cmt-pic {
            width: 80px;
            height: 80px;
            border-radius: 6px;
            overflow: hidden;
            margin-right: 5px;
            margin-top: 10px;
            padding: 5px;
            border: 1px dashed #ddd;
            margin-left:35px
          }
</style>