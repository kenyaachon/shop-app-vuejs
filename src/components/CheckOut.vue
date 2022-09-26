<template>
  <div>
    <h1>CheckOut</h1>
    <table class="table table-hover">
      <caption class="text-right h3">
        <b>Total:</b>
        <Price
          class="d-block text-success font-weight-light"
          :price="cartTotal()"
        />
      </caption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button @click="$emit('add', item.product)" class="btn btn-info">
                +
              </button>
              <button
                @click="$emit('smaller', index)"
                class="btn btn-outline-info"
              >
                -
              </button>
            </div>
          </td>
          <th scope="row">{{ item.product.name }}</th>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right">{{ Number(item.product.price) }}</td>
          <td class="text-right">
            {{ Number(item.qty * item.product.price) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Price from "./Price.vue";
export default {
  name: "CheckOut",
  props: ["cart"],
  data() {},
  components: {
    Price,
  },
  methods: {
    cartTotal() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.qty * item.product.price;
      });

      return total;
    },
  },
};
</script>

<style></style>
