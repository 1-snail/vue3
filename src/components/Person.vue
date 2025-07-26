<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
       <button @click="changeName">修改姓名</button>
       <button @click="changeAge">修改年龄</button>
       <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
    export default{
        name:"Person",
       setup(){

        // 数据

        let name = '张三'  // 此时的 name 不是响应式的
        let age = 18
        let tel = '1888'

        // 方法
        function changeName(){
            name= 'zhang-san'
        }
        function changeAge(){
            age = 20
        }
        function showTel(){
            alert(tel)
        }

        return {name,age,changeName,changeAge,showTel}
       }
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