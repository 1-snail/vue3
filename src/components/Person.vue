<template>
   <div class="person">
    <h2 ref="test">北京</h2>
    <button @click="showH2">展示H2内容</button>
   </div>
</template>


<script lang="ts" setup>
import { reactive, ref, watch, watchEffect } from 'vue';

// 创建一个test，用于存储 ref 标记的内容
let test = ref()

function showH2(){
  console.log(document.getElementById('test'));
  
}
  

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