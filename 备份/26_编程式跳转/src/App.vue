<template>
    <div class="app">
       <Header/>
        <!-- 导航去 -->
         <div class="navigate">
            <!-- 1、字符串写法 -->  
             <!-- replace控制跳转记录 -->
            <RouterLink replace active-class="active" to="/home">首页</RouterLink>
            <!-- 2、对象写法 -->

            <!-- 2.1 名字跳转， 用命名路由指定要跳转的地方 -->
            <RouterLink active-class="active" :to="{name:'xinwen'}">新闻</RouterLink>
            <!-- 2.2 路径跳转 -->
            <RouterLink active-class="active" :to="{path:'/about'}">关于</RouterLink>
         </div>
         <div class="main-content">
            <RouterView></RouterView>
         </div>
    </div>
   
</template>

<script lang="ts" setup name="App">
import { RouterView,RouterLink } from 'vue-router';
import Header from '@/compoonents/Header.vue'
</script>

<style>

.navigate{
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
}

.navigate a.active{
    background-color: #64967E;
    color: #ffc268;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
}
.main-content{
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
}
.navigate a{
    display: block;
    text-align: center;
    width: 90px;
    height:40px;
    line-height: 40px;
    border-radius: 10px;
    background-color:gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing:5px;
}

</style>