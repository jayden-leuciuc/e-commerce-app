export const addItemToCart = (cartItems, cartItemToAdd) => {
  //Check if item exists in array
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      //Map through each to see which is duplicate, so quantity can update
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //It is outside of if block b/c first time it is run, sets value to 1, so it can be added upon.
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
