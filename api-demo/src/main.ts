import { createApp } from 'vue'
import Antd from 'ant-design-vue';
import './style.css'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';

import Home from './pages/Home.vue'
import Api from './pages/Api.vue'
import WindowBase from './pages/tsb-api/WindowBase.vue'
import Runtime from './pages/tsb-api/Runtime.vue'


import { createRouter, createWebHashHistory, Router } from 'vue-router'

const routes=[
    {
        path:'/',component:Home
    },
    {
        path:'/api',component: Api,
        children:[
            {
                path:'/api/runtime',
                component:Runtime
            },
            {
                path:'/api/window-base',
                component:WindowBase
            }
        ]
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes
})

createApp(App).use(router).use(Antd).mount('#app')
