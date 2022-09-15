<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="form-inline mr-auto">
    <label class="font-weight-bold mr-2" for="priceFilter">Max Price</label>
    <input
      id="priceFilter"
      type="text"
      class="form-control w-25"
      v-model="maximum"
    />
  </div>

  <input
    type="range"
    class="custom-range"
    min="0"
    max="200"
    v-model="maximum"
  />
  <div
    class="row d-flex mb-3 align-items-center"
    v-for="(clothing, index) in maxPriceFilter"
    :key="index"
  >
    <ClothingItem
      :name="clothing.name"
      :description="clothing.description"
      :price="clothing.price"
      :image="clothing.image"
    />
  </div>
</template>

<script>
import ClothingItem from "./components/ClothingItem.vue";
// import { products, maximum } from "./data/data";

export default {
  name: "App",
  data() {
    return {
      clothes: [],
      maximum: 99,
    };
  },
  components: {
    ClothingItem,
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
