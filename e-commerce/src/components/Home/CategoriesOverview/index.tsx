import * as React from 'react';
import styles from './CategoriesOverview.module.scss';
import CategoryOverviewItem from './CategoryOverviewItem';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store';

interface CategoriesOverviewProps extends React.HtmlHTMLAttributes<{}> {}

const CategoriesOverview: React.FC<CategoriesOverviewProps> = (props: CategoriesOverviewProps) => {
  const categoriesOverview = useSelector((state: StoreState) => state.categoryState.overview);

  return (
    <div className={styles.categoriesOverview}>
      {categoriesOverview.map(({ id, title, imageUrl }) => (
        <CategoryOverviewItem key={id} title={title} imageUrl={imageUrl} />
      ))}
    </div>
  );
};

CategoriesOverview.defaultProps = {};

export default CategoriesOverview;
