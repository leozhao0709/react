import * as React from 'react';
import styles from './CollectionPage.module.scss';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';
import { useParams, useHistory } from 'react-router-dom';
import CollectionItem from '../../components/Shop/CollectionItem';

interface CollectionPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CollectionPage: React.FC<CollectionPageProps> = (props: CollectionPageProps) => {
  const { collectionRouteName } = useParams();
  const history = useHistory();
  const collection = useSelector((state: StoreState) =>
    state.collectionState.collections.find(collection => collection.routeName === collectionRouteName)
  );

  if (!collection) {
    history.push('/');
  }

  return (
    <div className={styles.collectionPage}>
      <div className={styles.title}>{collection!.title}</div>
      <div className={styles.items}>
        {collection!.items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

CollectionPage.defaultProps = {};

export default CollectionPage;
