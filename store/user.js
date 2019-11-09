// 用户管理
export const state=()=>({
    // 采用接口返回的数据结构需要暴露出来
    userInfo:{
        token:'',
        user:{}
    }
})
export const mutations={
    // 保存用户信息到state
    setUserInfo(state, data){
        state.userInfo = data;
    },
};
export const actions={
   // 登录
   login({commit}, data){
    return this.$axios({
        url: "/accounts/login",
        method: "POST",
        data: data
    }).then(res => {
        const data = res.data;
        // 保存到state
        commit("setUserInfo", data);
        return data;
    })
}
};