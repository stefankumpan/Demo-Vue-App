import { createStore } from "vuex";
import {
  StateValues,
  ProductItemValues,
  ShoppingCartValues,
} from "../interfaces/product";

export const store = createStore<StateValues>({
  state: {
    shoppingCart: [],
    productList: [],
  },
  getters: {
    countItemShoppingCart: (state) => () => {
      let counter = 0;
      state.shoppingCart.forEach(
        (item: ShoppingCartValues) => (counter = counter + item.quantity)
      );
      return counter;
    },
    getProductById: (state) => (id: number) => {
      const productWithId = state.productList.find((item) => id == item.id);
      return productWithId;
    },
  },
  mutations: {
    addItemToShoppingCart: (state, payload) => {
      const getIndex = state.shoppingCart.findIndex(
        (item: ProductItemValues) => item.id === payload.id
      );
      if (getIndex >= 0) {
        const cart = state.shoppingCart;
        cart[getIndex].quantity++;
        state.shoppingCart = cart;
      } else {
        payload["quantity"] = 1;
        state.shoppingCart.push(payload);
      }
    },
    removeItemFromShoppingCart: (state, payload) => {
      state.shoppingCart = state.shoppingCart.filter(
        (item: ProductItemValues) => item.id !== payload.id
      );
    },
    setProductList: (state, payload) => {
      state.productList = payload;
    },
  },
  actions: {},
  modules: {},
});
