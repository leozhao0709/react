import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';

interface HomeProps extends React.HTMLAttributes<HTMLDivElement> {
  shows: any[];
}

const Home: NextPage<HomeProps> = (props: HomeProps) => {
  // //client side render
  // const [shows, setShows] = useState([] as any[]);
  // useEffect(() => {
  //   axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01').then(res => setShows(res.data));
  // }, []);

  const { shows } = props;
  const renderShows = () => shows.map(showItem => <li key={showItem.id}>{showItem.show.name}</li>);

  return <ul>{renderShows()}</ul>;
};

export const getStaticProps = async () => {
  const res = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01');
  const shows = res.data;

  return {
    props: {
      shows
    }
  };
};

Home.defaultProps = {};

export default Home;
