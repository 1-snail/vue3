<template>
   <div class="person">
    <h1>情况二：监视【ref】监视的【对象类型】数据</h1>
      <h2>姓名:{{ person.name }}</h2>
      <h2>年龄:{{ person.age }}</h2>
      <button @click="changeName">修改名称</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改人</button>
   </div>
</template>


<script lang="ts" setup>
import { ref ,watch} from 'vue';

  let person = ref( {name:"zhangsan",age :18})


  function changeName(){
    person.value.name += "~"
  }
  function changeAge (){
    person.value.age ++
    
  }

function changePerson(){
  person.value = {name:'李四',age:100}
}

/* 监视的是 person 的地址值，当地址值发生变化则触发回调函数
若要监视 person 内部值，则需要配置watch第三个参数，加上 deep:true 
immediate:true 表示先执行一次回调函数，无论person是否变化
watch第一个参数：被监视的对象
watch第二个参数：回调函数
watch第三个参数：配置对象
*/
// 执行 changePerson() 是，newValue 和 oldValue值不同，
// 但是当触发changeName()、changeAge() 函数时 newValue 和 oldValue值 相同
watch(person,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
  
},{deep:true,immediate:true})

   
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