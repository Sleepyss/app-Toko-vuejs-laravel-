import { createApp } from 'vue'
import App from './App.vue'
import {createWebHistory, createRouter} from 'vue-router'
import axios from 'axios'

import home from "./components/home.vue"
import about from "./components/about.vue"
import contact from "./components/contact.vue"
import notFound from "./components/notFound.vue"
import browse from "./components/browse.vue"
import cart from "./components/cart.vue"
import Tambahbarang from "./components/Tambahbarang.vue"
import Editbarang from "./components/Editbarang.vue"

const router = createRouter({
    history : createWebHistory(),
    routes : [
        {path : '/', name: "Home", component : home},
        {path : '/about', name: "About", component : about},
        {path : '/contact', name: "Contact", component : contact},
        {path : '/notfound', name: "notFound", component : notFound},
        {path : '/browse', name: "browse", component : browse},
        {path : '/tambahbarang', name: "Tambahbarang", component : Tambahbarang},
        {path : '/browse/editbarang/:id', name: "Editbarang", component : Editbarang},
        {path : '/cart', name: "cart", component : cart},

    ],
    base : '/'
})

const app = createApp(App)
app.use(router)
app.config.globalProperties.axios = axios
app.mount("#app")