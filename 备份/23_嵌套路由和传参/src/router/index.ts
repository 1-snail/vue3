// 创建一个路由器，并暴露出去

// 第一步：引入 createRouter
import { createRouter ,createWebHashHistory,createWebHistory} from "vue-router";

// 引入一个个可能要呈现的组件
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

// 第二部： 创建路由器

const router = createRouter({

    
    history:createWebHistory(),  //指定路由器的工作模式
    /*
    history:(createWebHistory)
        优点：UR RL 更加美观，不带有#，更接近传统的网站URL。
        缺点：后期项目上线，需要服务端配合处理路径问题，否则刷新会有404错误。
    
    hash模式: (createWebHashHistory)
        优点：兼容性更好，因为不需要服务器端处理路径。
        缺点：URL带有#不太美观，且在SEO优化方面相对较差。
    */

    routes:[   // 一个一个的路由规则
        {
            path:'/',
            redirect: '/home'   // 增加重定向，指定到默认打开为 home
        },
        {
            name:'zhuye',  //命名路由
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',  //命名路由
            path:'/news',
            component:News,
            children:[    // 指定嵌套路由
                {
                    name:'xiangqing',
                    path:'detail',    // 子级路由不需要写斜杠(/)
                    component:Detail
                }
            ]
        },
        {
            name:'guanyu',  //命名路由
            path:'/about',
            component:About
        }

    ]
})

// 暴露 路由器
export default router