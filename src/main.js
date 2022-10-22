import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import './assets/main.css'
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './components/Home.vue'
import Histories from './components/view/Histories.vue'
import UseCoin from './components/view/UseCoin.vue'
import Personaly from './components/view/Personaly.vue'
import Update from './components/view/Update.vue'
import QR from './components/view/QR.vue'
import Item from './components/view/Item.vue'
import UpdateItems from './components/view/ChildItem/UpdateItems.vue'
import GiftDetails from './components/view/ChildItem/GiftDetails.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/hitories', component: Histories },
    { path: '/usecoin', component: UseCoin },
    { path: '/personaly', component: Personaly },
    { path: '/update', component: Update },
    { path: '/qr', component: QR },
    { path: '/item', component: Item },
    { path: '/updateitems', component: UpdateItems },
    { path: '/giftdetails/:id', component: GiftDetails },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(Antd)
app.use(router)
app.use(VueAxios, { $myHttp: axios })
app.mount('#app')

