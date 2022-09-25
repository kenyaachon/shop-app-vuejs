<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Navigation
    :cart="cart"
    @toggle-slider="sliderStatus = !sliderStatus"
    @delete="deleteItem"
    @smaller="reduceCartSize"
  />

  <h1>My Shop</h1>
  <PriceFilter v-model:maximum="maximum" :slider-status="sliderStatus" />

  <Products :maxPriceFilter="maxPriceFilter" @add="addItem" />
</template>

<script>
import "animate.css";

import Navigation from "./components/Navigation.vue";
import Products from "./components/Products.vue";
import PriceFilter from "./components/PriceFilter.vue";

export default {
  name: "App",
  data() {
    return {
      clothes: [],
      sliderStatus: true,
      maximum: 99,
      cart: [],
      labelArr: ["font-weight-bold", "mr-2"],
      inputWidth: 60,
    };
  },
  components: {
    Navigation,
    PriceFilter,
    Products,
  },
  methods: {
    addItem: function (product) {
      // this.console.log(product.id);

      let existingItem;
      const existing = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          existingItem = index;
          return true;
        }
        return false;
      });

      if (existing.length) {
        this.cart[existingItem].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem: function (desiredItem) {
      this.cart = this.cart.filter((item) => {
        if (item.product.id == Number(desiredItem.product.id)) {
          return false;
        }
        return true;
      });
    },
    reduceCartSize: function (id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.deleteItem(this.cart[id]);
      }
    },
  },
  computed: {
    maxPriceFilter: function () {
      return this.clothes.filter(
        (clothing) => clothing.price <= Number(this.maximum)
      );
    },
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.clothes = data;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
