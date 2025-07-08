import "./assets/css/app.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import Icons from "@/components/Icons.vue";
import App from "./App.vue";
import router from "./router";
import setupGlobalLoadingMiddleware from "./middleware/setupGlobalLoadingMiddleware";
import { MaskInput } from "vue-3-mask";
import "./assets/css/main.css";
const app = createApp(App);
app.component("Icons", Icons);
app.use(createPinia());
app.component("MaskInput", MaskInput);
app.use(router);

setupGlobalLoadingMiddleware(router);

app.mount("#app");
