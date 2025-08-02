<template>
    <div class="count">
        <h2> 当前求和为 {{ sum }}</h2>
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
<<<<<<< HEAD
import { useCountStore } from '@/store/count';

const countStore = useCountStore()
console.log(countStore.sum);

=======
>>>>>>> 6f8ab331e2e03245958044fecc201dc09104f1e6


let sum = ref(1)
let n = ref(1)

function Add(){
    sum.value  += n.value
}
function minus(){
    
    sum.value  -= n.value
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