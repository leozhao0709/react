import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import axios from 'axios';
import Thumbnail from '../../components/thumbnail';
import styles from './index.module.scss';
import Error from '../_error';
// import Error from 'next/error';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {
  shows: any[];
  country: string;
  statusCode?: number;
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  const router = useRouter();

  if (props.statusCode) {
    return <Error statusCode={props.statusCode} />;
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { shows } = props;
  const renderShows = () =>
    shows.map(showItem => {
      return (
        <li key={showItem.id}>
          <Thumbnail
            caption={showItem.show.name}
            imageUrl={showItem.show.image && showItem.show.image.medium}
            href="/[country]/[showId]"
            as={`/${props.country}/${showItem.show.id}`}
          />
        </li>
      );
    });

  return <ul className={styles.list}>{renderShows()}</ul>;
};

export const getStaticProps: GetStaticProps = async ctx => {
  try {
    const { params } = ctx;
    const country = params!.country;
    const res = await axios.get(`http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`);
    const shows = res.data;
    return {
      props: {
        shows,
        country
      }
    };
  } catch (error) {
    return {
      props: {
        // axios error response
        statusCode: error.response ? error.response.status : 500
      }
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { country: 'us' } }];
  return {
    paths,
    fallback: true
  };
};

Home.defaultProps = {};

export default Home;
