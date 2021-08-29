import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import i18n from "./i18n/index";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(vuetify);
app.mount("#app");
