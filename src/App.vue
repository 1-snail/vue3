<template>
    <!-- 写html -->
    <Person/>
</template>

<script>
import Person from './components/Person.vue';

    // 写 js 或 ts
    export default{
        name:"App", // 组件名
        components:{Person} // 注册组件
    }
</script>

<style>

</style>