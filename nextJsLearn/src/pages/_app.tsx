import React from 'react';
import { AppProps } from 'next/app';
import './_app.scss';
import Layout from '../components/layout';

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.addStatusHandler(status => {
//     if (typeof window !== 'undefined' && status === 'ready') {
//       window['__webpack_reload_css__'] = true;
//     }
//   });
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
