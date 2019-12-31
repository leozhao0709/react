import * as React from 'react';
import CollectionItem, { collectionItem } from '../../CollectionItem';
import styles from './CollectionPreview.module.scss';
import { useHistory } from 'react-router-dom';

interface CollectionPreviewProps {
  id?: number;
  title: string;
  routeName: string;
  items: collectionItem[];
}

const CollectionPreview: React.FC<CollectionPreviewProps> = (props: CollectionPreviewProps) => {
  const history = useHistory();
  const goToShop = () => {
    history.push(`/shop/${props.routeName}`);
  };

  return (
    <div className={styles.collectionPreview}>
      <div className={styles.title} onClick={() => goToShop()}>
        {props.title}
      </div>
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
