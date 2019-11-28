import * as React from 'react';

export interface collectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CollectionItemProps extends collectionItem {}

const CollectionItem: React.FC<CollectionItemProps> = (props: CollectionItemProps) => {
  return (
    <div>
      <div className="image"></div>
      <div className="footer">
        <div className="name">{props.name}</div>
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};

CollectionItem.defaultProps = {};

export default CollectionItem;
