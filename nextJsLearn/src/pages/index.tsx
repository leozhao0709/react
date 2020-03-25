import * as React from 'react';
import { NextPage, GetStaticProps } from 'next';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return <h1>Home Page</h1>;
};

export const getStaticProps: GetStaticProps = async ctx => {
  return { props: {} };
};

Home.defaultProps = {};

export default Home;
