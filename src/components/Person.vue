<template>
   <div class="person">
      <h2>姓名：{{ person.name }}</h2>
      <h2>年龄：{{ person.age }}</h2>
      <h2>车辆信息</h2>
      <ul>
        <li v-for="p in person.car"  :key="p">{{ p }}</li>
      </ul>
<br>
      <button @click="changeName">修改名字</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeFirstCar">修改第一辆车</button>
      <button @click="changeSecondCar">修改第二辆车</button>
      <button @click="changeCar">修改车信息</button>

   </div>
</template>


<script lang="ts" setup>
import { reactive } from 'vue';


let person = reactive({
  name:'zhangsan',
  age:18,
  car:{
    c1:'奔驰',
    c2:'宝马'
  }
})

 function changeName()
  {
    person.name += "~"
  }
  function  changeAge(){
    person.age ++
  }
  function  changeFirstCar(){
    person.car.c1 = '奥迪'
  }
  function  changeSecondCar(){
    person.car.c2 = '大众'
  }
  function  changeCar(){
    person.car = {c1:'雅迪',c2:"爱玛"}
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