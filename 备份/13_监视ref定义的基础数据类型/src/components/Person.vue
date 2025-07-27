<template>
   <div class="person">
    <h1>情况一：监视【ref】监视的【基本类型】数据</h1>
      <h2>当前求和为：{{ sum }}</h2>
      <button @click="changeSum">点我 sum + 1</button>
   </div>
</template>


<script lang="ts" setup>
import { ref ,watch} from 'vue';

    let sum = ref(0)

    function changeSum(){
      sum.value ++
    }

   const stopWatch = watch(sum,(newValue,oldValue)=>{
      console.log('sum发生变化',newValue,oldValue);
      if(newValue>10){
          stopWatch()
      }
    })


    
    // wathc(监视谁，回调函数)
    // 回调函数 (newValue,oldValue) =>{ }

   
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