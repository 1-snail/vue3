<template>
    <!-- 写html -->
    <Person a="enen" b="haha" :list="PersonList"/>
</template>

<script lang="ts" setup name="App">

import { reactive } from 'vue';
import Person from './components/Person.vue';
import {type Persons } from './Types/PersonInter';

// 在reactive中限定数据类型，而不是let PersonList:Person = reactive(....)
let PersonList =reactive<Persons>([
    {id:'a;ad;aj',name:'zhangsan1',age:18},
    {id:'a;ad;aa',name:'zhangsan2',age:19},
    {id:'a;ad;ad',name:'zhangsan3',age:20}
])


</script>

<style>

</style>