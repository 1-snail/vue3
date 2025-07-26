<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
       <button @click="showTel">查看联系方式</button>
       <button @click="changeName">修改名称</button>
       <button @click="changeAge">修改年龄</button>
    </div>
</template>


<script lang="ts" setup>
    import {ref} from 'vue'
    // 数据
    let name =ref('zhang-san')   // ref 创建基本类型的响应式数据
    let age = ref(18)
    let tel = 1222222


console.log(1,name.value)   // 用 .value 获得响应数据的具体值
console.log(2,age)
console.log(3,tel)


    // 方法
    function showTel(){
        alert(tel)
    }

    function changeName(){
        name.value = "张三"
    }

    function changeAge(){
        age.value ++
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