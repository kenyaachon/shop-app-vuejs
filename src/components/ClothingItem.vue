<template>
  <div class="col-sm-4">
    <img class="img-fluid d-block" :src="image" :alt="name" />
  </div>

  <div class="col">
    <h3 class="text-info">{{ name }}</h3>
    <p class="mb-0">{{ description }}</p>
    <div class="h5 float-right">{{ currency(price) }}</div>
  </div>
</template>

<script>
export default {
  name: "ClothingItem",
  props: ["name", "description", "price", "image"],
  methods: {
    currency: function (value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 15px;
}
</style>
