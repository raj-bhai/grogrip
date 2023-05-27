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
        <link rel="canonical" href="https://www.grogrip.com/home" />
        <meta name="google-site-verification" content="P1rLSRxY5hQ4--9Ktuz6cXNRY9bkDRqtloyNq1wein0" />
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
