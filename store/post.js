export const state = () => {
    return {
        city:""
    }
}

// mutations是用于同步修改state的数据
export const mutations = {
    changeCity(state,key){
        state.city=key
    }
}
