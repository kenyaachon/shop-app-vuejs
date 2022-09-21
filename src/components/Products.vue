<template>
  <transition-group
    name="fade"
    tag="div"
    enter-active-class="animate__animated animate__fadeInRight"
    leave-enter-class="animate__animated animate__fadeOutRight"
  >
    <div
      class="row d-flex mb-3 align-items-center"
      v-for="(clothing, index) in maxPriceFilter"
      :key="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$emit('add', clothing)">+</button>
      </div>

      <ClothingItem
        :name="clothing.name"
        :description="clothing.description"
        :price="clothing.price"
        :image="clothing.image"
      />
    </div>
  </transition-group>
</template>

<script>
import ClothingItem from "./ClothingItem.vue";
import "animate.css";
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
