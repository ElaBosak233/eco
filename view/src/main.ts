import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "https://code.iconify.design/1/1.0.7/iconify.min.js";
import router from "./router";
import store from "./store";

const app = createApp(App);
app.use(router).use(store);
import DefaultLayout from "./layout/default.vue";
app.component("default-layout", DefaultLayout);
import LoginLayout from "./layout/login.vue";
app.component("login-layout", LoginLayout);
app.mount("#app");

export default app;
