<template>
  <section class="contianer">
    <!-- 导航栏 -->
    <div class="nav">
      <div class="hotCity" v-for="(item,index) in form" :key="index" @mouseover="showList(index)" @mouseout="hideList">
        <span class="tital">{{item.type}}</span>
       
      </div>
      <!-- 标题栏 -->
       <div class="lists" v-show="navList" @mouseover="lis" @mouseout="hideList">
            <div  class="listOne" v-for="(item,index) in childrens" :key="index" @click="changeCity(index)">
                <span class="num">{{index+1}}</span> <span class="dibiao">{{item.city}}</span> <span class="miaoshu">{{item.desc}}</span>
            </div>
        </div>
        
    </div>
    <div class="tuijian">
         <h4>推荐城市</h4>
         <div class="img">
           <img src="@/assets/images/pic_sea.jpeg" alt="">
         </div>
        </div>
  </section>
</template>

<script>
import loginFormVue from '../user/loginForm.vue';
export default {
  data() {
    return {
      form: [
         
      ],
      childrens:[],
      navList: false
    };
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      const { data } = res.data;
      console.log(res.data);
      this.form=data
      console.log(this.form);
      
    });

  },
  methods:{
      showList(index){
          
          this.navList=true;
          this.childrens=this.form[index].children;
      },
      hideList(){
          this.navList=false;
      },
      lis(){
          this.navList=true;
      },
      changeCity(index){
        // 保存到store里面去
      this.$store.commit("post/changeCity",this.childrens[index].city);
      }
  }
};
</script>

<style lang="less" scoped>
.col{
    color:orange;
}
.contianer {
  width: 1000px;
  margin: 20px auto;
  position: relative;
}
.nav {
  width: 260px;
  border-left: 1px solid #ddd;
  border-top: 1px solid #ddd;

  .hotCity {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    border-right: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    position: relative;
    box-sizing: border-box;
    width: 260px;

   
}
.hotCity::after {
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
 .lists {
      width: 320px;
    
      position: absolute;
      top: 0;
      left: 260px;
      padding:10px 20px;
      border:1px solid #999;
      box-sizing: border-box;
       z-index: 999;
       background: #fff;
      .listOne{
        line-height: 30px;
          height: 30px;
          cursor:pointer;

          .num{
              font-size: 25px;
              font-style: italic;
              color:orange;
              font-weight: 900;
          }
          .dibiao{
              font-size: 14px;
              color:orange;
          }
          .miaoshu{
               font-size: 14px;
               color:#999;
          }
      }
      ::after {
        border: none;
      }
      .navs {
        background: pink;
        width: 100px;
        height: 20px;
      }
    }
  }
  .tuijian{
     width: 260px;
     float: left;
    h4{
      font-weight: 500;
      padding:15px 0;
      border-bottom: 1px solid #666;
    }
    .img{
      width: 260px;
      height: 173px;
      background: skyblue;
      margin-top:15px;
    }
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>