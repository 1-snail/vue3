<template>
    <div class="home">
        <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
    </div>
</template>

<script setup lang="ts" name="About">

import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
    console.log('home 页面挂载');

})

// 消失的页面其实是被卸载了
onUnmounted(() => {
    console.log('home 页面卸载');

})
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>