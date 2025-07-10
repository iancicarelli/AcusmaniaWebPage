import { createRouter, createWebHistory } from 'vue-router'
import landingpage from '../views/landingpage.vue'
import contac from '../views/contac.vue'
import aboutus from '../views/aboutus.vue'
import service from '../views/service.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: landingpage,
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: aboutus,
  },
  {
    path: '/Servicios',
    name: 'Servicios',
    component: service,
  },
  {
    path: '/Contactanos',
    name: 'Contactanos',
    component: contac,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
