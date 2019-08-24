/* 路由器对象模块 */
import Vue from 'vue';
import VueRouter from 'vue-router';

/* import MSite from '../pages/MSite/Msite.vue';
import Order from '../pages/Order/Order.vue';
import Search from '../pages/Search/Search.vue';
import Profile from '../pages/Profile/Profile.vue';

import Login from '../pages/Login/Login.vue';
import Shop from '../pages/Shop/Shop.vue';
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue';
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue';
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'; */

const MSite = () => import('../pages/MSite/Msite.vue')
const Order = () => import('../pages/Order/Order.vue')
const Search = () => import('../pages/Search/Search.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

const Login = () => import('../pages/Login/Login.vue')
const Shop = () => import('../pages/Shop/Shop.vue')
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo.vue')
const ShopRatings = () => import('../pages/Shop/ShopRatings/ShopRatings.vue')


// import Home from '../pages/Home/home.vue';


//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    //所有路由
    routes:[
      { 
         path: '/msite',
         component: MSite , 
         meta: { showFooter:true }
      },
      { 
         path: '/search', 
         component: Search , 
         meta: { showFooter:true }
      },
      { 
         path: '/order', 
         component: Order , 
         meta: { showFooter:true }
      },
      { 
         path: '/profile', 
         component: Profile, 
         meta: { showFooter:true }
      },
      { 
         path: '/login', 
         component: Login 
      },
    //    { path: '/home', component: Home },
      { 
         path: '/', 
         redirect:'/MSite' 
      },
      {
         path: '/shop',
         component: Shop,
         children:[
            {
               path: '/shop/goods',
               component:ShopGoods
            },
            {
               path: '/shop/info',
               component:ShopInfo
            },
            {
               path: '/shop/ratings',
               component:ShopRatings
            },
            { 
               path: '', 
               redirect:'/shop/goods' 
            },
         ]
      }
    ]
})