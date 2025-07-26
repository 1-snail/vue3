<template>
   <div class="person">
     姓：<input type="text" v-model="firstName"> <br>
     名：<input type="text" v-model="lastName" ><br>
     全称：<span> {{ fullName }}</span> <br>
     <button @click="changeFullName">修改名称</button>
   </div>
</template>


<script lang="ts" setup>
import type { RefSymbol } from '@vue/reactivity';
import { computed, ref } from 'vue';

  
    let firstName = ref("zhang")
    let lastName = ref('sa1n')
   
   // 计算属性
   // 这么定义的计算属性是只读的（每次修改firstName和lastName都会引发fullName重新计算）
  //  let fullName = computed(()=>{
  //   return firstName.value.slice(0,1).toUpperCase()+
  //   firstName.value.slice(1) +
  //   '-' +
  //   lastName.value
  //  })
  let fullName = computed({
    get: () => {
      return firstName.value.slice(0, 1).toUpperCase() +
        firstName.value.slice(1) +
        '-' +
        lastName.value;
    },
    set: (value: string) => {
      const [first, last] = value.split('-');
      firstName.value = first;
      lastName.value = last;
    }

  })

  function changeFullName(){
    fullName.value = "张-三"  

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