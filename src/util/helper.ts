export const formatToEuro = (value: number) => {
  const formed = value.toFixed(2).toString().replace(".", ",");
  return "€ " + formed;
};

export const shoppingCartTotal = (shopping_cart: any) => {
  let totalSum = 0;
  shopping_cart.forEach((item: any) => {
    totalSum += item.quantity * item.price;
  });

  return formatToEuro(totalSum);
};
