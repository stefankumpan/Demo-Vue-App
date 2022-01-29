<template>
  <h1 class="title">Shop</h1>
  <div class="products-container">
    <div
      v-for="product_item in productsList"
      :key="product_item.id"
      class="products__item"
    >
      <h2 class="products__item--title">
        {{ product_item.name }}
      </h2>
      <img
        class="products__item--image"
        :src="product_item.image"
        :alt="product_item.name"
      />
      <p class="products__item--description">
        {{ smallDescription(product_item.description) }}
      </p>
      <RouterLink
        class="products__item--link"
        :to="{ name: 'shop-product_id', params: { id: product_item.id } }"
        >More Information</RouterLink
      >
      <AddToCartButton
        @click="addToShoppingCart(product_item)"
        :price="product_item.price"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { ProductItemValues } from "@/interfaces/product";
import AddToCartButton from "./AddToCartButton.vue";

export default defineComponent({
  components: {
    AddToCartButton,
  },
  props: ["url"],
  setup(props) {
    const store = useStore();
    const productsList = computed(() => {
      return store.state.productList;
    });

    const getProductList = async () => {
      const response = await fetch(props.url);
      const data = await response.json();
      store.commit("setProductList", data);
    };

    getProductList();

    const formatToEuro = (value: number) => {
      const formed = value.toString().replace(".", ",");
      return "€ " + formed;
    };
    const smallDescription = (string: string) => {
      return string.substring(0, 50) + "...";
    };
    const addToShoppingCart = (item: ProductItemValues) => {
      store.commit("addItemToShoppingCart", item);
    };

    return { productsList, formatToEuro, smallDescription, addToShoppingCart };
  },
});
</script>

<style lang="scss" scoped>
.products-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
.products__item {
  border-radius: var(--default-border-radius);
  border: var(--default-border);
  padding: 1.5rem;
}
.products__item--title {
  text-align: center;
  border-bottom: 0.2rem solid var(--primary);
  padding: 0.4rem;
}
.products__item--image {
  max-width: 100%;
}
.products__item--link {
  display: block;
  text-align: center;
  font-size: 1.2rem;
  color: var(--primary);

  font-weight: 700;
  margin-bottom: 2rem;
  transition: all 300ms;
  &:hover {
    transform: scale(1.2);
    color: #222;
  }
}
</style>
