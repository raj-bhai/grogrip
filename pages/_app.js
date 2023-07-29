import '../styles/globals.css'
import { Provider } from 'react-redux';
import { useEffect } from 'react'
import Head from 'next/head';
import store from '../redux/store';
import { Analytics } from '@vercel/analytics/react';
import SEO from '../components/SEO';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const title = "Grogrip Power up Your YouTube Success - Automation, SEO, Content Mastery!"
  const description = "Boost YouTube growth with Grogrip: automation, SEO, content creation. Enhance online presence, drive targeted traffic. Expert strategies for success"
  const keywords = "Grogrip, Grogrip Media, growgrip,#grogrip, #grogrip_media, #Grogrip, Youtube Automation, SEO, Script Writing, Content Writing"
  const ogImage = './favicon.ico'

  useEffect(() => {
    // Initialize Google Analytics with your tracking ID
    ReactGA.initialize('G-RQF44EP1R1');

    // Send initial pageview event
    ReactGA.pageview(window.location.pathname);

    // Track pageview on route change
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
