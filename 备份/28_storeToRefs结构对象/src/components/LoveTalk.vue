<template>
    <div class="talk">

        <button @click="getLoveTalk">获得一个土味情话</button>
        <ul>
            <li v-for="talk in talkStore.talkList" :key="talk.id"> {{ talk.title }}</li>
        </ul>
    </div>
</template>

<script setup name="LoveTalk" lang="ts">
import { reactive } from 'vue';
import {useTalkStore} from '@/store/loveTalk'

const talkStore = useTalkStore()

let talkList = reactive([
    {id:'001',title:'今天你有点怪，哪里怪？怪好看的！'},
    {id:'002',title:'草莓、蓝莓、蔓越莓，今天想我了！'},
    {id:'003',title:'心里给你留了一块地，我的死心塌地'}
])


async function getLoveTalk(){
    talkStore.getLoveTalk()
}

</script>

<style scoped>

.talk{
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>