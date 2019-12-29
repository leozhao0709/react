export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ITEM = 'CLEAR_ITEM'
}

export interface CartAction {
  type: CartActionType;
  payload?: {};
}

export const CartActions = {
  addItem: (item: ProductItem) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
  }),
  removeItem: (item: ProductItem) => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
  }),
  clearItem: (item: ProductItem) => ({
    type: CartActionType.CLEAR_ITEM,
    payload: item
  })
};
