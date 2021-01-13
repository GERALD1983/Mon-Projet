import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Accueil from "../views/Accueil.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/accueil",
    name: "Accueil",
    component: Accueil,
  },
];

// router
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
