<template>
    <!-- 写html -->
     <div class="app">
        <h1>你好啊</h1>
        <Preson/>
     </div>
</template>

<script>
import Preson from './components/Preson.vue';
import Person from './components/Preson.vue'

    // 写 js 或 ts
    export default{
        name:"App", // 组件名
        components:{Person} // 注册组件
    }
</script>

<style>
/* 写样式 */
.app{
    background-color: red;
    width: 200px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>