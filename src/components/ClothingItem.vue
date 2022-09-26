<template>
  <div class="col-sm-4">
    <img class="img-fluid d-block" :src="image" :alt="name" />
  </div>

  <div class="col">
    <h3 class="text-info">{{ name }}</h3>
    <p class="mb-0">{{ description }}</p>
    <!-- <div class="h5 float-right">{{ currency(price) }}</div> -->
    <Price :price="Number(price)" />
  </div>
</template>

<script>
import Price from "./Price.vue";

export default {
  name: "ClothingItem",
  props: {
    name: String,
    description: String,
    price: String,
    image: String,
  },
  methods: {
    currency: function (value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
  },
  components: {
    Price,
  },
};
</script>

<style scoped>
h1 {
  font-size: 15px;
}
</style>
