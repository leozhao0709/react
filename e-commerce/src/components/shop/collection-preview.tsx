import * as React from 'react';
import CollectionItem, { collectionItem } from './collection-item/collection-item';

interface CollectionPreviewProps {
  id?: number;
  title: string;
  routeName: string;
  items: collectionItem[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = (props: CollectionPreviewProps) => {
  return (
    <div>
      <h1 className="title">{props.title.toLocaleUpperCase()}</h1>
      <div className="items">
        {props.items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

CollectionPreview.defaultProps = {};

export default CollectionPreview;
