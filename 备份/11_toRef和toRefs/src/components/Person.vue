<template>
   <div class="person">
      <h2>姓名:{{ name }}</h2>
      <h2>年龄:{{ age }}</h2>
      
      <button @click="changeAge">修改名称</button>
      <button @click="changeName">修改名称</button>
   </div>
</template>


<script lang="ts" setup>
    import { ref,reactive,toRef,toRefs } from 'vue'

    
    let person = reactive({
      name:"张三",
      age : 18
    })
    // let {name,age} = person  // 解构变量
    let {name,age} =toRefs(person)  // 将 person中赋值给 name,age，并解析成响应式数据，两者会同步变化
    let nl = toRef(person,'age')  // 提取 person 中某个属性

   function changeAge(){
    age.value +=1;
   }
   function changeName(){
    name.value +="~"
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