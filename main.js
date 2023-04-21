import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/app.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

createApp(App).use(router).use(bootstrap).mount("#app");
