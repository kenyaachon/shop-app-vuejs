<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <input type="text" class="form-control w-25" v-model="maximum" />

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
import { products, maximum } from "./data/data";

export default {
  name: "App",
  data() {
    return {
      clothes: products,
      maximum: maximum,
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
