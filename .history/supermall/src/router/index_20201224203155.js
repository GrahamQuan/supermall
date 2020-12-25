import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("./components/home/home");

Vue.use(VueRouter);

const routes = [];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;