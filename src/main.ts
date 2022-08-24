import { createApp } from "vue";
import { createPinia } from "pinia";

import socketIO from "socket.io-client";

export const socket = socketIO("http://localhost:4000");

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
