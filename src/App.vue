<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Navigation :cart="cart" @toggle-slider="sliderStatus = !sliderStatus" />
  <!-- <PriceFilter v-model="maximum" /> -->

  <h1>My Shop</h1>
  <Transition>
    <div class="align-items-center" :class="sliderState">
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
  </Transition>

  <!-- <Products :maxPriceFilter="maxPriceFilter" v-model="cart" /> -->
  <div
    class="row d-flex mb-3 align-items-center"
    v-for="(clothing, index) in maxPriceFilter"
    :key="index"
  >
    <div class="col-1 m-auto">
      <button class="btn btn-info" v-on:click="addItem(item)">+</button>
    </div>
    <ClothingItem
      :name="clothing.name"
      :description="clothing.description"
      :price="clothing.price"
      :image="clothing.image"
    />
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import ClothingItem from "./components/ClothingItem.vue";
// import Products from "./components/Products.vue";
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
    ClothingItem,
    // Products,
  },
  methods: {
    addItem: function (product) {
      this.cart.push(product);
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

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
