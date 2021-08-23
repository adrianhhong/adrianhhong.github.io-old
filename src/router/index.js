import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/crab",
    name: "Crab",
    component: () =>
      import(/* webpackChunkName: "crab" */ "@/views/CrabAndCoconuts.vue"),
  },
  {
    path: "/just-one",
    name: "Just One",
    component: () =>
      import(/* webpackChunkName: "justone" */ "@/views/JustOne.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
