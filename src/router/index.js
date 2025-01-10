import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue'
import Projects from '@/views/ProjectsPage.vue'
import About from '@/views/About.vue'
import Contact from '@/views/ContactPage.vue'

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: About},
    {path: '/projects', name: 'Projects', component: Projects},
    {path: '/contact', name: 'Contact', component: Contact}
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior(to) {
        if(to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return { top: 0};
        }
    }
})

export default router