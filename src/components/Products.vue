<template>
  <div
    class="row d-flex mb-3 align-items-center"
    v-for="(clothing, index) in maxPriceFilter"
    :key="index"
  >
    <div class="col-1 m-auto">
      <button class="btn btn-info" :click="cart.push(item)">+</button>
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
import ClothingItem from "./ClothingItem.vue";
export default {
  name: "ProductsList",
  props: ["maxPriceFilter"],
  components: {
    ClothingItem,
  },
  mounted() {
    this.cart = ["yes"];
  },
  methods: {
    update() {
      this.$emit("cart");
    },
  },
  data() {
    return {
      cart: [],
    };
  },
};
</script>

<style></style>
