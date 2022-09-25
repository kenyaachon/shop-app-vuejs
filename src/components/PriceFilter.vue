<template>
  <transition name="fade">
    <div class="align-items-center" v-if="sliderStatus" :class="sliderState">
      <label :class="labelArr" for="priceFilter">Max Price</label>
      <input
        id="priceFilter"
        type="text"
        class="form-control mx-2"
        :style="{ width: inputWidth + 'px', textAlign: 'center' }"
        v-model="maxAmount"
        @change="$emit('update:maximum', maxAmount)"
      />
      <input
        type="range"
        class="custom-range"
        min="0"
        max="200"
        v-model="maxAmount"
        @input="$emit('update:maximum', maxAmount)"
      />
    </div>
  </transition>
</template>

<script>
export default {
  name: "PriceFilter",
  props: ["maximum", "sliderStatus"],
  data: function () {
    return {
      maxAmount: 99,
      inputWidth: 60,
    };
  },
  computed: {
    sliderState: function () {
      return this.sliderStatus ? "d-flex" : "d-none";
    },
  },
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
