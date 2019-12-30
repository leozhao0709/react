import * as React from 'react';
import styles from './HomePage.module.scss';
import CategoriesOverview from '../../components/Home/CategoriesOverview';

interface HomePageProps extends React.HtmlHTMLAttributes<{}> {}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return (
    <div className={styles.homepage}>
      <CategoriesOverview />
    </div>
  );
};

HomePage.defaultProps = {};

export default HomePage;
