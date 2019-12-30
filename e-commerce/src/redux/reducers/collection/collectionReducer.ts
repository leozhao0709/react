import { CollectionAction } from '../../actions/collectionAction';
import SHOP_DATA from '../../../data/shop.data';

export interface CollectionState {
  overview: Collection[];
}

const initialState: CollectionState = {
  overview: SHOP_DATA
};

const CollectionReducer = (state = initialState, action: CollectionAction): CollectionState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CollectionReducer;
