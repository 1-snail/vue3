import { defineStore } from "pinia";

// 定义并导出一个仓库
export const useCountStore = defineStore('count',{

    // actions 里面放置的是一个个的方法，用于响应组件中的“动作”
    actions:{

        // 这里的方法可以复用
        increament(value:number){
            console.log('increament被调用了',value);
            // //第三种修改数据方式
            // this.sum += value
            //此处可加判断,这个判断逻辑放在了内部
            if(this.sum <= 10){
                this.sum += value
            }
        }
    },

    state(){
        return{
            sum:1,
            school:'at111',
            address:'adress111'

        }
    }
})