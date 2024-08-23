import Home from "./components/Home.vue";

import { createRouter , createWebHistory } from "vue-router"; 
import SignIn from "./components/SignIn.vue";
import Components from "./components/Components.vue";

const routes = [
    {
        name:"Home",
        component : Home,
        path : '/'
    },
    {
        name:"SignIn",
        component : SignIn,
        path : '/SignIn'
    },
    {
        name:"Components",
        component : Components,
        path : '/Components'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;