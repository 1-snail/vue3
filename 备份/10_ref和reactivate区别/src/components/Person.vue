<template>
   <div class="person">
    <h2>车辆信息：一辆{{ car.brand }}车，价值{{ car.price }} w</h2>
    <button @click="changePrice">修改汽车价格</button>
    <button @click="changeCarInfo">修改汽车名称和价格</button>
   </div>
</template>


<script lang="ts" setup>
    import { ref,reactive } from 'vue'

  let car = ref({brand:"奔驰",price:100})   // 用 ref 也可以创建对象的响应式数据


  
  function changePrice(){
    car.value.price += 10  
  }

  function changeCarInfo(){
    car.value ={brand:"奥拓",price:1}
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