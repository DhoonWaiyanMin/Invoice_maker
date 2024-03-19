import { createApp } from 'vue'
import './style.css'
import { createRouter , createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {
            path : '/',
            name : 'Home',
            component : Home
        },
        {
            path : '/LoanList',
            name : 'LoanList',
        },
        {
            path : '/Invoices',
            name : 'Invoices',
        },
        {
            path : '/AboutUs',
            name : 'AboutUs',
            component : AboutUs
        },
    ]
})

import App from './App.vue'

createApp(App).use(router).mount('#app')
