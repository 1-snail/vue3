import { defineStore } from "pinia";
import { nanoid } from "nanoid";
import axios from "axios";
export const useTalkStore = defineStore('talk', {

    actions:{
       async getLoveTalk(){

       // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        let {data:{content:title}} = await axios.get('/api/rand.qinghua?format=json')

        let obj = {id:nanoid(),title}
        this.talkList.push(obj)
        }
    },

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