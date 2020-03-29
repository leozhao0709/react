import React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/layout/index';

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

const About: NextPage<AboutProps> = (props: AboutProps) => {
  return (
    <Layout>
      <h1>About Page</h1>
    </Layout>
  );
};

About.defaultProps = {};

export default About;
