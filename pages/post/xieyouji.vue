<template>
  <section class="contianer">
    <div class="left">
      <h2>发表新攻略</h2>
      <p class="title">分享你的个人游记，让更多人看到哦！</p>
      <el-form ref="form" :model="form" class="forms">
        <el-form-item>
          <el-input v-model="form.title" placeholder="请输入标题"></el-input>
        </el-form-item>

        <el-form-item>
          <vue-editor
            v-model="form.content"
            @image-added="imgUpload"
            :editorToolbar="customToolbar"
          ></vue-editor>
        </el-form-item>

        <el-form-item label="请选择城市" class="dingwei">
          <!-- fetch-suggestions 返回输入建议的方法 -->
          <!-- select 点击选中建议项时触发 -->
          <el-autocomplete
            v-model="departCity"
            :fetch-suggestions="queryDepartSearch"
            placeholder="目的地"
            @select="handleDepartSelect"
          ></el-autocomplete>
        </el-form-item>

        <el-form-item class="dingwei">
          <el-button type="primary" @click="fabu">发表</el-button>
          <span>
            或者
            <a href="#" class="caogao"  @click="handleClickDraft">保存到草稿</a>
          </span>
        </el-form-item>
      </el-form>
    </div>
    <div class="right">
      <p class="biao">草稿箱 （ 0 ）</p>

      <div class="draft-list" v-for="(item,index) in $store.state.post.posts" :key="index">
        <div class="draft-item" @click="handleGetPosts(index)">
          <div class="draft-post-title">
            {{item.title}}
            <span class="iconfont el-icon-edit"></span>
          </div>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// 导入富文本框
import { VueEditor } from "vue2-editor";
// 引入下载moment插件将时间转换成标准格式
import moment from "moment";
export default {
  components: {
    VueEditor,
    moment
  },
  data() {
    return {
      customToolbar: [
        ["bold", "italic", "underline"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["image", "code-block"]
      ],
      departCity: "",
      departCode: "",
      form: { content: null, title: "", city: "" }
    };
  },
  methods: {
    // 出发城市输入框获得焦点时触发
    // value 是选中的值，cb是回调函数，接收要展示的列表
    async queryDepartSearch(value, cb) {
      const arr = await this.querySearchAsync(value);
      if (arr.length > 0) {
        // 不在下拉列表中选择，则默认选择第一项
        this.departCity = arr[0].value;
        this.departCode = arr[0].sort;
      }
      cb(arr);
    },

    // 出发城市下拉选择时触发
    handleDepartSelect(item) {
      this.departCity = item.value;
      this.departCode = item.sort;
    },
    // queryString是查询关键字
    querySearchAsync(queryString) {
      return new Promise((resolve, reject) => {
        // 如果为空就直接返回
        if (!queryString) {
          return resolve([]);
        }
        this.$axios({
          url: "/airs/city",
          params: {
            name: queryString
          }
        }).then(res => {
          const { data } = res.data;

          this.form.city = data[0].id;
          console.log(this.form.city);
          // 下拉提示列表必须要有value字段
          const arr = data.map(v => {
            return {
              ...v,
              value: v.name.replace("市", "")
            };
          });
          resolve(arr);
        });
      });
    },
    // 这里是富文本框添加图片触发的函数
    imgUpload(file, Editor, cursorLocation, resetUploader) {
      // file 使我们要上传的文件
      // Editor 是我们正在使用的编辑器
      // cursorLocation 这是子组件获取到的当前光标位置
      // restUploader 这是当你处理完了所有数据,应该重置这个上传的组件
      var formData = new FormData();
      formData.append("file", file);

      this.$axios({
        url: "/upload",
        method: "POST",
        data: formData
      })
        .then(res => {
          console.log(res);
          const { data } = res.data;
          let url = this.$axios.defaults.baseURL + data.url;
          // url 使我们在上面传输完图片获取的地址
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch(err => {
          console.log(err);
        });
    },
    fabu() {
      if (!this.form.title) {
        this.$message.error("标题不能为空");
        return;
      }
      if (!this.form.content) {
        this.$message.error("内容不能为空");
        return;
      }
      if (!this.form.city) {
        this.$message.error("城市名称不能为空");
        return;
      }
      //html剔除富文本标签，留下纯文本

      var re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      this.form.content = this.form.content.replace(re1, ""); //执行替换成空字符
      console.log(this.form.content);

      // 发送ajax请求
      this.$axios({
        url: "/posts",
        method: "post",
        headers: {
          // Bearer属于jwt的token标准
          Authorization: "Bearer " + this.$store.state.user.userInfo.token
        },
        data: this.form
      }).then(res => {
        const { data } = res.data;
        this.$message.success("新增成功");
      });
    },
     handleSelect(item) {
    //   console.log(item);
      this.form.city = item.value;
	},
	// 添加到本地
	handleClickDraft(){
		let data=new Date();
		let posts ={...this.form,time:''}
		posts.time= moment(data).format('YYYY-MM-DD')	
		this.$store.commit('post/setLocalStorage',posts);				
	},
	//修改草稿箱文章
	handleGetPosts(index){
		let {posts}=this.$store.state.post
		this.form.title=posts[0].title;
		this.form.city=posts[0].city;
		this.form.content=posts[0].content;
	}
  }
  }

</script>

<style lang="less" scoped>
.contianer {
  width: 1000px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  .left {
    width: 750px;

    position: relative;
    .xuanze {
      width: 200px;
    }
  }
  .right {
    width: 200px;
    border: 1px solid #666;
     padding: 10px;
    .biao {
      
     
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
.caogao {
  color: orange;
}
.dingwei {
  position: relative;
}
.draft-list{
  padding :5px 0; 
}
</style>