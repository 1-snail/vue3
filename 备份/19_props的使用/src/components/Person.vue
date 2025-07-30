<template>
   <div class="person">
   <ul>
    <li v-for="person in list"  :key="person.id" >
      {{ person.name }} -- {{ person.age }}
    </li>
   </ul>
   </div>
</template>


<script lang="ts" setup>

// 此处的 type 表示引用的是一个对象
import {type PersonInter, type Persons} from '@/Types/PersonInter'
// defineXXXX 之类的函数都是属于宏函数，可以不用引入
import { defineProps,withDefaults} from 'vue';

// 接收 App.vue 传递来的 a
// defineProps(['a'])

// 接受 list + 限制类型
//defineProps<{list:Persons}>()

// 接受 list + 限制类型 + 显示必要性 + 指定默认值
// list? 表示可传可不传
// 用 withDefaults 指定默认值 ,第二个参数指定默认值
withDefaults( defineProps<{list?:Persons}>(),
{
  list:()=> [{id:'aoa',name:"lisi",age:21}]  // 此处需要是一个函数返回值
}
)

// 接收传递来的 a b,并保存到 x 变量中
let x = defineProps(['a','b','list'])

console.log(x);
console.log(x.a);

</script>

<style scoped>

    .person{
    margin: 20px;
    background-color: rgb(59, 144, 178);
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>