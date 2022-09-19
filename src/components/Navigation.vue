<template>
  <nav class="navbar navbar-left fixed-top">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$emit('toggleSlider')"
      >
        <!-- <i class="fas fa-dollar-sign"></i> -->
      </button>
      <div class="ml-2" v-if="cart.length >= 0">
        <b>cart:</b>
        <span class="badge badge-pill badge-success">{{ cart.length }}</span>
      </div>
    </div>
  </nav>
</template>

<script>
// /* add fontawesome core */
// import { library } from '@fortawesome/fontawesome-svg-core'

// import {fa-dollar-sign} from ''

// library.add(fa)

export default {
  name: "NavigationBar",
  props: ["cart"],
  //   emits: ["toggleSlider"],
  methods: {
    toggleSlider() {
      //   this.$emit("toggleSlider");
      console.log("hello something interesting");
    },
  },
};
</script>

<style></style>
