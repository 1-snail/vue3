<template>
    <!-- 写html -->
     <h2 ref="test">你好</h2>
     <button @click="ShowTest">显示test内容</button>

    <Person ref="ren"/>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue';
import {ref,defineExpose} from 'vue'

let test = ref()
let ren = ref()

function ShowTest(){
    console.log(ren.value); // 此处 ren.value 拿到了 Person 的实例对象
    
}




</script>

<style>

</style>