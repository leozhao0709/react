import React from 'react';
import { NextPage } from 'next';

interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {}

const About: NextPage<AboutProps> = (props: AboutProps) => {
  return <h1>About Page</h1>;
};

About.defaultProps = {};

export default About;
