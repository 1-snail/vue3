import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk', {
    state() {
        return {
            talkList: [
                { id: '001', title: '今天你有点怪，哪里怪？怪好看的！' },
                { id: '002', title: '草莓、蓝莓、蔓越莓，今天想我了！' },
                { id: '003', title: '心里给你留了一块地，我的死心塌地' }
            ]
        }
    }
})