import '../styles/globals.css'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../redux/store';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GroGrip - Grow Your Youtube</title>
        <meta name="description" content="One place for your all SEO, SMO, CONTENT" />
        <meta property="og:title" content="GroGrip - Grow Your Youtube " />
        <meta property="og:description" content="GroGrip - Grow Your Youtube " />
        <meta property="og:url" content="https://grogrip.com/home" />
        {/* <meta property="og:image" content="/beyobofavicon.png" /> */}
        <meta name="og_site_name" property="og:site_name" content="https://grogrip.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://grogrip.com" />
        {/* <link rel="alternate" href="android-app://in.zaadu.twa"></link> */}
        {/* <link rel="icon" href="/beyobofavicon.png" /> */}
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
      </Provider>
    </>
  )
}

export default MyApp
