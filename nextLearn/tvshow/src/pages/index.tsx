import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Router from 'next/router';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  useEffect(() => {
    Router.replace('/[country]', '/us');
  }, []);

  return <React.Fragment></React.Fragment>;
};

Home.defaultProps = {};

export default Home;
