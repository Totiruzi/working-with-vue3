import {createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import AzHeroes from './pages/AzHeroes.vue';
import Calendar from './pages/Calendar.vue';

const routes = [
  {path: '/', component: Home},
  {path : '/az-heros', component: AzHeroes},
  {path : '/calendar', component : Calendar}
]
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;