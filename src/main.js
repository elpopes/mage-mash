import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import SelectionScreen from "./components/SelectionScreen.vue";
import BattleScreen from "./components/BattleScreen.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/selection", component: SelectionScreen, name: "SelectionScreen" },
    {
      path: "/battle/:cardId",
      component: BattleScreen,
      name: "battle",
      props: true,
    },
  ],
});

createApp(App).use(router).mount("#app");
