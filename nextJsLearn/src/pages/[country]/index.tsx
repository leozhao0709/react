import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import Thumbnail from '../../components/thumbnail';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {
  shows: any[];
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { shows } = props;
  const renderShows = () =>
    shows.map(showItem => {
      if (!showItem.show.image) {
        return;
      }
      return (
        <li key={showItem.id}>
          <Thumbnail caption={showItem.show.name} imageUrl={showItem.show.image.medium} />
        </li>
      );
    });

  return <ul>{renderShows()}</ul>;
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { params } = ctx;

  const res = await axios.get(`http://api.tvmaze.com/schedule?country=${params!.country}&date=2014-12-01`);
  const shows = res.data;

  return {
    props: {
      shows
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { country: 'us' } }];
  return {
    paths,
    fallback: true
  };
};

// export const getServerSideProps: GetServerSideProps = async ctx => {
//   const { params } = ctx;
//   const res = await axios.get(`http://api.tvmaze.com/schedule?country=${params!.country}&date=2014-12-01`);
//   const shows = res.data;

//   return {
//     props: {
//       shows
//     }
//   };
// };

Home.defaultProps = {};

export default Home;
