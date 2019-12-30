import * as React from 'react';
import styles from './CollectionOverview.module.scss';
import CollectionPreview from './CollectionPreview';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store';

interface CollectionOverviewProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CollectionOverview: React.FC<CollectionOverviewProps> = (props: CollectionOverviewProps) => {
  const collectionsOverview = useSelector((state: StoreState) => state.collectionState.overview);

  return (
    <div className={styles.collectionOverview}>
      {collectionsOverview.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

CollectionOverview.defaultProps = {};

export default CollectionOverview;
