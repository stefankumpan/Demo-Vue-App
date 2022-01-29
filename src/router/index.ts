import {
  createRouter,
  RouterScrollBehavior,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/shop/",
    name: "shop",
    component: () => import("../views/shop/Products.vue"),
  },
  {
    path: "/shop/products/:id",
    name: "shop-product_id",
    component: () => import("../views/shop/ProductItem.vue"),
  },
  {
    path: "/shop/cart",
    name: "shopping-cart",
    component: () => import("../views/shop/ShoppingCart.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
