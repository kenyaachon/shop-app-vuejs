import { createApp } from "vue";
import App from "./App.vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faShoppingCart, faDollarSign);

/* import font awesome icon component */

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

// app.use(BootstrapVue);
// app.use(IconsPlugin);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
