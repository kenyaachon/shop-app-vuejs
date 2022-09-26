import { createApp } from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
  faTrashCan,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Products from "./components/Products.vue";
import Checkout from "./components/CheckOut.vue";
/* import font awesome icon component */
library.add(faShoppingCart, faDollarSign, faTrashCan, faSquareMinus);

const app = createApp(App);

// Define some routes
// Each route should map to a component
const routes = [
  { path: "/:*", component: Products },
  {
    path: "/checkout",
    component: Checkout,
  },
];

// Create the router instance
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

//make sure to use the router instance to  make the
// whole app router-aware
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
