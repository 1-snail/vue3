<template>
   <div class="person">
    <h2>水温：{{ temp }} °</h2>
    <h2>高度：{{ height }} cm</h2>
    <button @click="changeTemp">增加温度</button>
    <button @click="changeHeight">增加高度</button>
   </div>
</template>


<script lang="ts" setup>
import { bundlerModuleNameResolver } from 'typescript';
import { reactive, ref, watch, watchEffect } from 'vue';

let temp = ref(0)
let height = ref(0)



function changeTemp(){
  temp.value += 10
}
function changeHeight(){
  height.value += 10
}
watch([temp,height],(newValue)=>{
  if(newValue[0] >= 60 || newValue[1]>= 60){
    console.log('发送给服务器');
    
  }
})

// 监视 ，不需要指定要监视谁
watchEffect(()=>{
  if(temp.value >= 60 || height.value >= 60){
    console.log('发送给服务器');
  }
})
  

</script>

<style scoped>

    .person{
    margin: 20px;
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>