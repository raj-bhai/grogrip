import '../styles/globals.css'
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../redux/store';
import { Analytics } from '@vercel/analytics/react';
import SEO from '../components/SEO';

function MyApp({ Component, pageProps }) {
  const title = "Grogrip Power up Your YouTube Success - Automation, SEO, Content Mastery!"
  const description ="Boost YouTube growth with Grogrip: automation, SEO, content creation. Enhance online presence, drive targeted traffic. Expert strategies for success"
  const keywords = "Grogrip, Grogrip Media, growgrip,#grogrip, #grogrip_media, #Grogrip, Youtube Automation, SEO, Script Writing, Content Writing"
  const ogImage ='./favicon.ico'
  return (
    <>
      <Head>
        {/* <title>GroGrip - Grow Your Youtube</title> */}
        {/* <meta name="description" content="One place for your all SEO, SMO, CONTENT" /> */}
        {/* <meta property="og:title" content="GroGrip - Grow Your Youtube " /> */}
        {/* <meta property="og:description" content="GroGrip - Grow Your Youtube " /> */}
        {/* <meta property="og:url" content="https://grogrip.com/home" /> */}
        {/* <meta name="og_site_name" property="og:site_name" content="https://grogrip.com" /> */}
        {/* <meta property="og:type" content="website" /> */}
        <link rel="canonical" href="https://grogrip.com" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
      </Provider>
      <SEO title={title} pageDescription={description} keywords={keywords} ogImage={ogImage}></SEO>
    </>
  )
}

export default MyApp
