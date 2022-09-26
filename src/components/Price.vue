<template>
  <div class="h5 float-right">{{ currencyFormat(price) }}</div>
</template>

<script>
export default {
  name: "PriceComponent",
  props: {
    precision: {
      type: Number,
      default: 2,
    },
    price: Number,
    currency: {
      type: String,
      default: "$",
    },
  },
  methods: {
    currencyFormat: function (value) {
      return this.currency + Number.parseFloat(value).toFixed(this.precision);
    },
  },
};
</script>
