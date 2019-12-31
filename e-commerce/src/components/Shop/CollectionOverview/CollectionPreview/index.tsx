import * as React from 'react';
import CollectionItem, { collectionItem } from '../../CollectionItem';
import styles from './CollectionPreview.module.scss';

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
        {props.items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

CollectionPreview.defaultProps = {};

export default CollectionPreview;
