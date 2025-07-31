// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter ,createWebHistory} from "vue-router";

// 引入一个个可能要呈现的组件
import Home from "@/compoonents/Home.vue";
import News from "@/compoonents/News.vue";
import About from "@/compoonents/About.vue";

// 第二部： 创建路由器

const router = createRouter({
    history:createWebHistory(),  // 路由器的工作模式

    routes:[   // 一个一个的路由规则
        {
            path:'/home',
            component:Home
        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/about',
            component:About
        }
    ]
})

// 暴露 路由器
export default router