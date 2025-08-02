import { defineStore } from "pinia";

// 定义并导出一个仓库
export const useCountStore = defineStore('count',{
    state(){
        return{
            sum:6
        }
    }
})