export enum CartActionType {
  ADD_ITEM = 'ADD_ITEM'
}

export interface CartAction {
  type: CartActionType;
  payload?: {};
}

export const CartActions = {
  addItem: (item: ProductItem) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
  })
};
