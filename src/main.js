import { createApp } from "vue";
import { createPinia } from "pinia";
import VueHighlightJS from "vue3-highlightjs";

import App from "./App.vue";

import "highlight.js/styles/atom-one-dark.css";
import "./assets/css/tailwind.css";
import "./assets/css/base.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(VueHighlightJS);
app.mount("#app");
