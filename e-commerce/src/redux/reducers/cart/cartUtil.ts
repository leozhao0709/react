export const addProductItemToCart = (cartItems: CartItem[], productItem: ProductItem): CartItem[] => {
  const product = cartItems.find(cartItem => cartItem.id === productItem.id);

  if (!product) {
    return [...cartItems, { ...productItem, quantity: 1 }];
  }

  return cartItems.map(cartItem =>
    cartItem.id !== productItem.id
      ? cartItem
      : {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
  );
};
