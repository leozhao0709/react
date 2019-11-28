import * as React from 'react';
import styles from './homepage.module.scss';
import Categories from '../../components/home/categories';

interface HomePageProps extends React.HtmlHTMLAttributes<{}> {}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return (
    <div className={styles.homepage}>
      <Categories />
    </div>
  );
};

HomePage.defaultProps = {};

export default HomePage;
