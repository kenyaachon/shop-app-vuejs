<template>
  <!-- <div class="form-inline mr-auto">
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
  /> -->
</template>

<script>
export default {
  name: "PriceFilter",
  props: ["maximum"],
};
</script>
<style></style>
