<template>
  <div class="container shopping-cart">
    <h1>Shopping Cart</h1>

    <ul class="shopping-cart-list">
      <li class="shopping-cart-list__item" v-for="item in cart" :key="item.id">
        <h2 class="name">{{ item.name }}</h2>
        <div class="description">
          {{ item.description }}
        </div>
        <div class="options">
          <button class="remove-item-btn" @click="removeItemFromCart(item)">
            <DeleteIcon />
          </button>
        </div>
        <img class="image" :src="item.image" :alt="item.name" />
        <div class="info">
          <span>Quantity: {{ item.quantity }}</span>
          <span>Price: {{ formatToEuro(item.price) }}</span>
          <span>Sum: {{ formatToEuro(item.quantity * item.price) }}</span>
        </div>
      </li>
    </ul>
    <div class="total-price">
      <span>Total: {{ shoppingCartTotal(cart) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { formatToEuro, shoppingCartTotal } from "../../util/helper";
import DeleteIcon from "@/components/icons/DeleteIcon.vue";
import { ShoppingCartValues } from "@/interfaces/product";

export default defineComponent({
  components: {
    DeleteIcon,
  },
  setup() {
    const store = useStore();
    const cart = computed(() => store.state.shoppingCart);
    const removeItemFromCart = (item: ShoppingCartValues) => {
      store.commit("removeItemFromShoppingCart", item);
    };
    return { cart, formatToEuro, shoppingCartTotal, removeItemFromCart };
  },
});
</script>

<style lang="scss">
.shopping-cart {
  .shopping-cart-list {
    padding: 0;
    list-style: none;
  }
  .shopping-cart-list__item {
    display: grid;
    grid-template-columns: 20% auto 70px;
    gap: 1rem;
    grid-template-rows: auto;
    grid-template-areas:
      "image name name"
      "image description options"
      "image info info";
    border: var(--default-border);
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .image {
    grid-area: image;
    max-width: 150px;
    display: block;
    align-self: center;
    justify-self: center;
  }
  .name {
    grid-area: name;
    margin: 0;
  }
  .description {
    grid-area: description;
    line-height: 1.5;
  }
  .options {
    grid-area: options;
    justify-self: end;
    align-self: center;
  }
  .info {
    grid-area: info;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: end;
    font-size: 1.4rem;
  }

  .remove-item-btn {
    fill: #ff0000;
    background-color: #222;
    border: none;
    padding: 0.4rem;
    transform: scale(1.4);
    border-radius: var(--default-border-radius);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #ff0000;
      fill: #222;
    }
  }
  .total-price {
    text-align: end;
    font-size: 2rem;
  }
}
</style>
