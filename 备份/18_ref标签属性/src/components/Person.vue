<template>
   <div class="person">
    <h2 ref="test">北京</h2>
    <button @click="showH2">展示H2内容</button>
   </div>
</template>


<script lang="ts" setup>
import { reactive, ref, watch, watchEffect,defineExpose } from 'vue';

// 创建一个test，用于存储 ref 标记的内容
// 此时 test 相当于引用了 关联的 h2 ,对test.value 所有操作都会同步到 h2 上，包括修改样式
let test = ref()
let a  = ref(0)
let b  = ref(0)
let c  = ref(0)
function showH2(){
  console.log(test.value);
  
}
// 对外暴露 a,b,c,否则App.vue中无法看到 abc
defineExpose({a,b,c})

</script>

<!-- scoped 表示局部样式，只能选中这里person的样式 
 基本上 scope 无脑加 -->
<style scoped>

    .person{
    margin: 20px;
    background-color: rgb(59, 144, 178);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>