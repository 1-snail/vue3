<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 查询字符串传参。query 传递参数，加上 ? ，a、b 为key， 哈哈、嘿嘿为value， & 表示分隔符 -->
                <!-- <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`">{{ news.title }}</RouterLink> -->

                <!-- 查询字符串第二种写法 -->
                <!-- <RouterLink :to="{
                    // path:'/news/detail',
                    name:'xiangqing',  // 通过命名跳转
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }

                }">{{ news.title }}</RouterLink> -->

                <!-- 通过params传递参数 
                 只能传字符串，复杂对象需序列化
                 传递的参数量必须和占位一样，或者在占位符上加 ? 
                 -->
                <RouterLink :to="{
                    name:'xiangqing',  // 【只能】通过命名跳转
                    // // 写法一：将路由收到所有的 params 参数作为 props 传给路由组件（这种写法只能和 params 配合）
                    //  params:{
                    //     id:news.id,
                    //     title:news.title,
                    //     content:news.content
                    // },
                    // //写法二：函数式写法。自己决定将什么作为 props 给路由组件
                    query:{
                        id:news.id,
                        title:news.title,
                        content:news.content
                    }

                }">{{ news.title }}</RouterLink>



            </li>
        </ul>
        <!-- 展示区 -->
    <div class="news-content">
        <RouterView ></RouterView>
        </div>  
    </div>
</template>
<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterView } from 'vue-router';


const newsList = reactive([
    {id:'001',title:'很好的抗癌食物',content:'西蓝花'},
    {id:'002',title:'如何一夜暴富',content:'学IT'},
    {id:'003',title:'震惊，万万没想到',content:'明天是周一'},
    {id:'004',title:'好消息！好消息！',content:'快过年了'},
])

</script>
<style scoped>
/*新闻*/
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}


.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}

.news li::marker{
    color: #64967E;
}

.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
}
</style>
