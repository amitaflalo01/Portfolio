import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/views/MainLayout";
import Contact from "@/components/Contact";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children:[
      {
        path: "/contact",
        name: "Contact",
        component: Contact,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
