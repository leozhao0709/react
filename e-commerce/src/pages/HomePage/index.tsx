import * as React from 'react';
import styles from './HomePage.module.scss';
import CategoriesOverview from '../../components/Home/CategoriesOverview';
import { AddButton } from '@leozhao0709/react-millhouse';

interface HomePageProps extends React.HtmlHTMLAttributes<{}> {}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  return (
    <div className={styles.homepage}>
      <CategoriesOverview />
      <AddButton />
    </div>
  );
};

HomePage.defaultProps = {};

export default HomePage;
