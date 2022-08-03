import { createApp } from "vue";
import "./Sass/style.scss";
import vClosable from "./close.js";
import App from "./App.vue";

createApp(App).directive('closable', vClosable).mount("#app");
