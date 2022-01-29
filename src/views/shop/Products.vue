<template>
  <div class="container">
    <products-list url="/api/products.json" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductsList from "@/components/shop/ProductList.vue";

export default defineComponent({
  name: "ProductsIndex",
  components: {
    ProductsList,
  },
});
</script>
