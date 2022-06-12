import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../components/MainPage.vue";
import Projects from "../components/MainProjects.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
    name: "home",
  },
  {
    path: "/projects",
    component: Projects,
    name: "projects",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
