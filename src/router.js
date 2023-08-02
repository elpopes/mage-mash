import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/HomePage.vue";
import SelectionScreen from "./components/SelectionScreen.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    // Additional routes
    {
      path: "/selection",
      name: "selection",
      component: SelectionScreen,
    },
  ],
});
