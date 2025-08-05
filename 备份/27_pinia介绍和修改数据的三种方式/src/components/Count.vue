<template>
    <div class="count">
        <h2> 当前求和为 {{ countStore.sum }}</h2>
        <h2>欢迎来到{{ countStore.school }},位于 {{ countStore.address }}</h2>
        <br>
        <button @click="changeInfo">修改信息</button>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="Add">加</button>
        <button @click="minus">减</button>

    </div>

</template>

<script setup name="Count   " lang="ts">
import { ref } from 'vue';
import { useCountStore } from '@/store/count';

const countStore = useCountStore()
console.log(countStore.sum);



let sum = ref(1)
let n = ref(1)

function Add(){
    //第一种修改数据方式： pinia 直接修改单个数据
    //countStore.sum +=1
    
    //第三种修改数据方式：用actions 中的函数修改数据
    countStore.increament(n.value)
}
function minus(){
    countStore.sum -= n.value
    //sum.value  -= n.value
}

function changeInfo(){
    // 第二中修改方式： 批量修改
    // $path 提供一个碎片
    countStore.$patch({

        school:'修改后的学校',
        address:'修改后的地址',
    })
}

</script>

<style scoped>
.count{
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 3px;
    height: 25px;
}
</style>