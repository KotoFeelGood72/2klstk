import "./assets/css/app.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import Icons from "@/components/Icons.vue";
import App from "./App.vue";
import router from "./router";
import setupGlobalLoadingMiddleware from "./middleware/setupGlobalLoadingMiddleware";
import { MaskInput } from "vue-3-mask";
import "./assets/css/main.css";

const app = createApp(App);

// 1) создаём и настраиваем pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia); // ✅ здесь исправлено
app.use(router);

app.component("Icons", Icons);
app.component("MaskInput", MaskInput);

setupGlobalLoadingMiddleware(router);

app.mount("#app");
