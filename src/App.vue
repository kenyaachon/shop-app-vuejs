<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Navigation
    :cart="cart"
    @toggle-slider="sliderStatus = !sliderStatus"
    @delete="deleteItem"
    @smaller="reduceCartSize"
  />
  <!-- <PriceFilter v-model="maximum" /> -->

  <h1>My Shop</h1>
  <transition name="fade">
    <div class="align-items-center" v-if="sliderStatus" :class="sliderState">
      <label :class="labelArr" for="priceFilter">Max Price</label>
      <input
        id="priceFilter"
        type="text"
        class="form-control mx-2"
        :style="{ width: inputWidth + 'px', textAlign: 'center' }"
        v-model="maximum"
      />
      <input
        type="range"
        class="custom-range"
        min="0"
        max="200"
        v-model="maximum"
      />
    </div>
  </transition>

  <Products :maxPriceFilter="maxPriceFilter" @add="addItem" />
</template>

<script>
import Navigation from "./components/Navigation.vue";
// import ClothingItem from "./components/ClothingItem.vue";
import "animate.css";
import Products from "./components/Products.vue";
// import PriceFilter from "./components/PriceFilter.vue";

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
    // ClothingItem,
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
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
