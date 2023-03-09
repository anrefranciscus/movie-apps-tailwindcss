import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import axios from "axios";
import Config from "@/config/Config";

Vue.config.productionTip = false;
axios.defaults.headers.common["Authorization"] = Config.token;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
