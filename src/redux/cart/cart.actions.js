import CartActionTypes from './cart.types';

//We dont need a payload, since we are only switching boolean
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

//We use actiontype.add_item so that it is consistent and we dont accidentally type the wrong ting
//It just translates to "ADD_ITEM"
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});
