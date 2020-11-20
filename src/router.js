import {createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import AzHeroes from './pages/AzHeroes.vue';
import Calendar from './pages/Calendar.vue';
import Markdowm from './pages/Markdowm.vue';
import Slider from './pages/Slider.vue';
import Calculator from './pages/Calculator.vue'


const routes = [
  {path: '/', component: Home},
  {path: '/az-heros', component: AzHeroes},
  {path: '/calendar', component: Calendar},
  {path: '/markdown', component: Markdowm},
  {path: '/slider', component: Slider},
  {path: '/calculator', component: Calculator}
]
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;