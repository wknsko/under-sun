import { createWebHistory, createRouter } from 'vue-router';

import Home from '../views/Home';
import About from '../views/About';
import Products from '../views/Products';
import Shops from '../views/Shops';
import Contact from '../views/Contact';
import NotFound from '../views/NotFound';


const routes = [
    { path: '/home', name: 'Home', component: Home, alias: '/' },
    { path: '/about', name: 'About', component: About },
    { path: '/products', name: 'Products', component: Products },
    { path: '/shops', name: 'Shops', component: Shops },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'Not Found', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;