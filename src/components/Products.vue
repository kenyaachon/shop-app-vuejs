<template>
  <div>
    <img alt="Vue logo" src=".././assets/logo.png" />
    <Navigation :cart="cart" />

    <h1>My Shop</h1>
    <PriceFilter :maximum="maximum" :slider-status="sliderStatus" />

    <ProductsList :maxPriceFilter="maxPriceFilter" />
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
import PriceFilter from "./PriceFilter.vue";
import ProductsList from "./ProductsList.vue";

export default {
  name: "ProductsComponent",
  props: ["maxPriceFilter", "maximum", "cart", "sliderStatus", "sliderState"],
  components: {
    Navigation,
    PriceFilter,
    ProductsList,
  },
};
</script>

<style></style>
