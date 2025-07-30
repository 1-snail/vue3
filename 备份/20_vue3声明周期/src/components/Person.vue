<template>
   <div class="person">
  
   <h2>当前sum： {{ sum }}</h2>
   <button @click="changeSum">点击 sum + 1</button>
   </div>
</template>


<script lang="ts" setup>

import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from 'vue'

let sum = ref(0)

function changeSum(){
  sum.value ++
}

console.log('创建'); // 写在setup 中默认创建

// 组件的声明周期：创建、挂载、更新、卸载

// 挂载前
onBeforeMount(()=>{
  console.log('挂载前');
  
})

// 挂载后
onMounted(()=>{
  console.log('挂载后');
  
})

onBeforeUpdate(()=>{
  console.log('更新前');
  
})

onUpdated(()=>{
  console.log('更新后');
  
})

onBeforeUnmount(()=>{
  console.log('卸载前');
  
})

onUnmounted(()=>{
  console.log('卸载后');
  
})


</script>

<style scoped>

    .person{
    margin: 20px;
    background-color: rgb(59, 144, 178);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>