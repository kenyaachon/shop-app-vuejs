<template>
  <nav class="navbar navbar-left bg-light fixed-top">
    <b>cart:</b>
    <span class="badge badge-pill badge-success">{{ cart.length }}</span>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props: ["cart"],
};
</script>

<style></style>
