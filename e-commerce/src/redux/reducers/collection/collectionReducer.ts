import { CollectionAction } from '../../actions/collectionAction';
import SHOP_DATA from '../../../data/shop.data';

export interface CollectionState {
  overview: Collection[];
  collections: Collection[];
}

const initialState: CollectionState = {
  overview: SHOP_DATA.map(({ id, title, routeName, items }) => ({
    id,
    title,
    routeName,
    items: items.filter((_, index) => index < 4)
  })),
  collections: SHOP_DATA
};

const CollectionReducer = (state = initialState, action: CollectionAction): CollectionState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default CollectionReducer;
