import * as React from 'react';
import styles from './CategoryOverviewItem.module.scss';
import { useHistory } from 'react-router-dom';

interface CategoryOverviewItemProps extends React.HtmlHTMLAttributes<{}> {
  title: string;
  imageUrl: string;
}

const CategoryOverviewItem: React.FC<CategoryOverviewItemProps> = (props: CategoryOverviewItemProps) => {
  const history = useHistory();

  const goToShop = () => {
    history.push(`/shop/${props.title}`);
  };

  return (
    <div className={styles.categoryItem}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
      ></div>
      <div className={styles.content} onClick={() => goToShop()}>
        <div className={styles.title}>{props.title.toUpperCase()}</div>
        <div className={styles.subtitle}>SHOP NOW</div>
      </div>
    </div>
  );
};

CategoryOverviewItem.defaultProps = {};

export default CategoryOverviewItem;
