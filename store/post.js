export const state = () => {
    return {
        city:"",
        posts:[],//本地储存草稿文章
    }
}

// mutations是用于同步修改state的数据
export const mutations = {
    changeCity(state,data){
        state.city=data;
    },
      //设置草稿文章数据
      setLocalStorage(state,post){
        state.posts.unshift(post)
    }
}
