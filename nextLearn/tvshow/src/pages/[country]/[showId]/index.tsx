import React from 'react';
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import styles from './index.module.scss';
import axios from 'axios';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import Casts from '../../../components/casts';

interface CountryDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  show: any;
}

const CountryDetail: NextPage<CountryDetailProps> = (props: CountryDetailProps) => {
  const { show } = props;
  const route = useRouter();
  if (route.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.countryDetails}>
      <div className={styles.poster} style={{ backgroundImage: `url(${show.image.original})` }}></div>
      <h1>{show.name}</h1>
      {parse(show.summary)}
      {show._embedded && show._embedded.cast.length > 0 && <Casts casts={show._embedded.cast} />}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const { params } = ctx;
  const showId = params && params.showId;
  const req = await axios.get(`http://api.tvmaze.com/shows/${showId}?embed=cast`);
  const show = req.data;
  return {
    props: {
      show
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [{ params: { country: 'us', showId: '339141' } }];
  return {
    paths,
    fallback: true
  };
};

CountryDetail.defaultProps = {};

export default CountryDetail;
