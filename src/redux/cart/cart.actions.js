import CartActionTypes from './cart.types';

//We dont need a payload, since we are only switching boolean
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
