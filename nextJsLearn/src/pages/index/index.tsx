import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return (
    <Layout>
      <h1>Home Page</h1>
    </Layout>
  );
};

Home.defaultProps = {};

export default Home;
