import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "https://code.iconify.design/1/1.0.7/iconify.min.js";

const app = createApp(App);

import DefaultLayout from "./layout/default.vue";
app.component("DefaultLayout", DefaultLayout);

import LoginLayout from "./layout/login.vue";
app.component("LoginLayout", LoginLayout);

import store from "./store";
app.use(store);

import router from "./router";
app.use(router);

app.mount("#app");
