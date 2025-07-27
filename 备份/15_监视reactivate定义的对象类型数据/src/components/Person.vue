<template>
   <div class="person">
    <h1>情况三：监视【reactivate】监视的【对象类型】数据</h1>
      <h2>姓名:{{ person.name }}</h2>
      <h2>年龄:{{ person.age }}</h2>
      <button @click="changeName">修改名称</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改人</button>
   </div>
</template>


<script lang="ts" setup>
import { reactive, toRefs, watch} from 'vue';

  let person = reactive( {name:"zhangsan",age :18})


  function changeName(){
    person.name += "~"
  }
  function changeAge (){
    person.age ++
    
  }

function changePerson(){
  Object.assign(person,{name:'李四',age:100})
}

// 不使用 deep:true ，reactivate 默认开启深度监视（隐式创建深层监听），无法关闭
watch(person,(newValue,oldValue)=>{
  console.log(newValue,oldValue);
  
})

   
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