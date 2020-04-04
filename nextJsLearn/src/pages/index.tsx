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

// export const getStaticProps: GetStaticProps = async ctx => {
//   console.log(ctx);

//   return {
//     props: {}
//   };
// };

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const country = ctx.query.country || 'us';
//   process.browser ? Router.replace('/[country]', `/${country}`) : ctx.res.writeHead(302, { Location: `/${country}` });

//   ctx.res.end();

//   return {
//     props: {}
//   };
// };

Home.defaultProps = {};

export default Home;
