const PAGENUM_ADD = 'PAGENUM_ADD'
const INITDATA='INITDATA'
export default{
    [PAGENUM_ADD](state,num){
        state.pageNum+=num
    },
    [INITDATA](state){
        state.pageNum=1;
        state.answer=[]
    }
}