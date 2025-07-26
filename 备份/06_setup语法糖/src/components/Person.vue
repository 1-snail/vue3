<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
       <button @click="showTel">查看联系方式</button>
    </div>
</template>


<script lang="ts" setup>

    // 数据
    let name = 'zhang-san'
    let age = 18
    let tel = 1222222

    // 方法
    function showTel(){
        alert(tel)
    }
</script>

<style scoped>

    .person{
        margin: 20px;
    background-color: skyblue;
    width: 200px;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>