import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/pages/home/HomePage.vue'
import LoginPage from '../views/pages/authentication/LoginPage.vue'
import MenuPage from '../views/pages/menu/MenuPage.vue'
import OrderPage from '../views/pages/order/OrderPage.vue';
import OrderSummaryPage from '../views/pages/order/OrderSummaryPage.vue';
import OrderConfirmPage from '../views/pages/order/OrderConfirmPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/menu',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: OrderPage
  },
  {
    path: '/order/summary',
    name: 'OrderSummaryPage',
    component: OrderSummaryPage
  },
  {
    path: '/order/confirm',
    name: 'OrderComfimPage',
    component: OrderConfirmPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
