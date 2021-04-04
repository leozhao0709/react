import React from 'react';
import { GetServerSideProps } from 'next';

const Error = ({ statusCode }: { statusCode: number }) => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.response.status : 500;
  return { statusCode };
};

export default Error;
