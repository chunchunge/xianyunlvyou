<template>
<div :@sear="vals">
  <Navigation/>
  
     <Search/>
     <ArticleList/>
</div>
  
    
</template>

<script>
import Navigation from "@/components/post/navigation"
import Search from "@/components/post/search"
import ArticleList from "@/components/post/articleList"
export default {
  components:{
    Navigation,
    Search,
    ArticleList
  },
  data(){
    return {
      val:""
    }
  },
 computed:{
    vals(val){
      this.val=val;
      console.log(11111);
      console.log(this.val);
      
      
    }
  }
}
</script>

<style lang="less" scoped>
  
</style>