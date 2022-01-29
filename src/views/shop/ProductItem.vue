<template>
  <div class="container">
    <button @click="goBack()" class="go-back-btn">Back</button>
    <div class="product-grid">
      <div>
        <img :src="product.image" alt="" />
      </div>
      <div class="info">
        <h1>{{ product.name }}</h1>
        <p>
          {{ product.description }}
        </p>
        <AddToCartButton @click="addToCart(product)" :price="product.price" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { ProductItemValues } from "@/interfaces/product";
import AddToCartButton from "@/components/shop/AddToCartButton.vue";

export default defineComponent({
  components: { AddToCartButton },
  setup() {
    const store = useStore();

    const route = useRoute();
    const router = useRouter();
    const pID = route.params.id;

    const product = store.getters.getProductById(pID);
    const addToCart = (item: ProductItemValues) => {
      store.commit("addItemToShoppingCart", item);
    };
    const goBack = () => {
      router.go(-1);
    };

    return { product, addToCart, goBack };
  },
});
</script>

<style scoped lang="scss">
.container {
  margin-top: 2rem;
}
.product-grid {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
}
p {
  line-height: 2;
  margin-bottom: 4rem;
}
.go-back-btn {
  background-color: #222;
  font-size: 1.4rem;
  color: var(--white);
  border: none;
  border-radius: var(--default-border-radius);
  padding: 0.8rem 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: var(--primary);
  }
}
</style>
