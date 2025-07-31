<template>
   <div class="person">
  
   <h2>当前sum： {{ sum }}</h2>
   <button @click="changeSum">点击 sum + 1</button>
   <hr>
   <img v-for="(dog,index) in dogList" :src="dog" :key="index"></img>
   <br></br>
   <button @click="addDog">增加一只狗</button>
   </div>
</template>


<script lang="ts" setup>


import axios from 'axios';

import useDog from '@/hooks/useDog'
import useSum from '@/hooks/useSum';

const {sum,changeSum} = useSum()
const {dogList,addDog} = useDog()


</script>

<style scoped>

    .person{
    margin: 20px;
    background-color: rgb(59, 144, 178);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
img{
  height: 100px;
  margin-right: 10px;
}
</style>