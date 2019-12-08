import * as React from 'react';
import styles from './CategoryItem.module.scss';

interface CategoryItemProps extends React.HtmlHTMLAttributes<{}> {
  title: string;
  imageUrl: string;
}

const CategoryItem: React.FC<CategoryItemProps> = (props: CategoryItemProps) => {
  return (
    <div className={styles.categoryItem}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${props.imageUrl})`
        }}
      ></div>
      <div className={styles.content}>
        <div className={styles.title}>{props.title.toUpperCase()}</div>
        <div className={styles.subtitle}>SHOP NOW</div>
      </div>
    </div>
  );
};

CategoryItem.defaultProps = {};

export default CategoryItem;
