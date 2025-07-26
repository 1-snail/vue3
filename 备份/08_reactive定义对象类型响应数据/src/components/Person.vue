<template>
   <div class="person">
    <h2>车辆信息：一辆{{ car.brand }}车，价值{{ car.price }} w</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br>
    <h2>游戏信息：</h2>
    <ul>
        <!-- key 前面的 : ,表示将 'g.id' 的内容当初js表达式解析，而不是字符串
         全称是 v-bind:key = 'g.id'
         -->
        <li v-for="g in games" :key = 'g.id'>{{ g.names }}</li>
    </ul>
    <button @click="changeGameName">修改游戏名称</button>
   </div>
</template>


<script lang="ts" setup>
    import { reactive } from 'vue'

  let car = reactive({brand:"奔驰",price:100})   // 用 reactive 创建对象的响应式数据

  let games = reactive([  
    {id:"0001",names:"王者"},
    {id:"0002",names:"原神"},
    {id:"0003",names:"三国"}
  ])

  //console.log(car)

  function changePrice(){
    car.price += 10
    console.log(car.price)
  }

  function changeGameName(){
    games[0].names="enen"
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