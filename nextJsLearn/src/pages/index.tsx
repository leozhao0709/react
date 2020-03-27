import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import axios from 'axios';
// import { Button } from '@leozhao0709/react-millhouse';

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

  let AddButton;
  const renderAddButton = () => {
    if (typeof window !== 'undefined') {
      AddButton = import('@leozhao0709/react-millhouse').then(mod => mod.AddButton);
    }

    return AddButton;
  };

  return (
    <ul>
      {renderShows()}
      {renderAddButton()}
    </ul>
  );
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
