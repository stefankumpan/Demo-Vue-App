export interface ProductItemValues {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

export interface ShoppingCartValues extends ProductItemValues {
  quantity: number;
}

export interface StateValues {
  shoppingCart: Array<ShoppingCartValues>;
  productList: Array<ProductItemValues>;
}
