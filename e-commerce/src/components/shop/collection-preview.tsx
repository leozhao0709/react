import * as React from 'react';
import CollectionItem, { collectionItem } from './collection-item/collection-item';
import styles from './collection-preview.module.scss';

interface CollectionPreviewProps {
  id?: number;
  title: string;
  routeName: string;
  items: collectionItem[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = (props: CollectionPreviewProps) => {
  return (
    <div className={styles.collectionPreview}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.items}>
        {props.items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

CollectionPreview.defaultProps = {};

export default CollectionPreview;
