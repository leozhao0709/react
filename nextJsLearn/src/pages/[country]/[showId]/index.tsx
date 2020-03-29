import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import styles from './index.module.scss';
import axios from 'axios';

interface CountryDetailProps extends React.HTMLAttributes<HTMLDivElement> {
  show: any;
}

const CountryDetail: NextPage<CountryDetailProps> = (props: CountryDetailProps) => {
  return (
    <div className={styles.showDetails}>
      <div></div>
      <h1>Country Detail</h1>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const req = await axios.get('http://api.tvmaze.com/shows/1?embed=cast');
  const show = req.data;
  return {
    props: {
      show
    }
  };
};

CountryDetail.defaultProps = {};

export default CountryDetail;
