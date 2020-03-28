import React from 'react';
import { NextPage } from 'next';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  return <h1>Home Page</h1>;
};

Home.defaultProps = {};

export default Home;
