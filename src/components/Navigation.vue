<template>
  <nav class="navbar navbar-left fixed-top">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$emit('toggleSlider')"
      >
        <!-- <i class="fas fa-dollar-sign"></i> -->
      </button>
      <div class="dropdown ml-2">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          type="button"
          id="cartDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
          @click="toggleDropDown"
        >
          <span class="badge badge-pill badge-success">{{ cartTotal }}</span>

          <b>cart:</b>
          <span class="badge badge-pill badge-success">{{ cartSize }}</span>
        </button>
        <div
          class="dropdown-menu dropdown-menu-right"
          aria-labelledby="cartDropdown"
          :class="dropDownMenu"
        >
          <div v-for="(item, index) in cart" :key="index">
            <div class="dropdown-item-text text-nowrap text-right">
              <span
                class="badge badge-pill badge-warning align-text-top mr-1"
                >{{ item.qty }}</span
              >
              {{ item.product.name }}
              <b>{{ currency(item.product.price) }}</b>
            </div>
          </div>
        </div>
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
  props: {
    cart: {
      type: Array,
      required: "true",
    },
  },
  data() {
    return {
      dropDownStatus: false,
    };
  },
  //   emits: ["toggleSlider"],
  methods: {
    toggleSlider() {
      //   this.$emit("toggleSlider");
      console.log("hello something interesting");
    },
    currency: function (value) {
      return "$" + Number.parseFloat(value).toFixed(2);
    },
    toggleDropDown() {
      return (this.dropDownStatus = !this.dropDownStatus);
    },
  },
  computed: {
    dropDownMenu() {
      return this.dropDownStatus ? "show" : "";
    },
    cartSize() {
      let size = 0;

      this.cart.forEach((item) => {
        size += item.qty;
      });
      return size;
    },
    cartTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.qty * item.product.price;
      });

      return this.currency(total);
    },
  },
};
</script>

<style></style>
