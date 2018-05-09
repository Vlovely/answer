export default{
    addNum({commit,state},id){
        // commit('PAGENUM_ADD',id);
        // 点击下一题记录答案id
        state.answer.push(id)
        // console.log(state.answer)
        // 题目递增的过程
        if(state.pageNum<state.itemDetail.length){
            commit('PAGENUM_ADD',1)
        }
    },
    initData({commit}){
        commit('INITDATA')
    }
}