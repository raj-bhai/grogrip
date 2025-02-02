import '../styles/globals.css'
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react'
import Head from 'next/head';
import store from '../redux/store';
import { Analytics } from '@vercel/analytics/react';
import SEO from '../components/SEO';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
// import { useDispatch } from 'react-redux';
// import { GetCart } from '../redux/action/cart';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [domLoaded, setDomLoaded] = useState(false)
  const title = "YTgrowthsecrets Power up Your YouTube Success - Automation, SEO, Content Mastery!"
  const description = "Boost YouTube growth with YTgrowthsecrets: automation, SEO, content creation. Enhance online presence, drive targeted traffic. Expert strategies for success"
  const keywords = "Grogrip, Grogrip Media, growgrip,#grogrip, #grogrip_media, #Grogrip, Youtube Automation, SEO, Script Writing, Content Writing"
  const ogImage = './favicon.ico'

  useEffect(() => {
    setDomLoaded(true)
    ReactGA.initialize('G-RQF44EP1R1');
    ReactGA.pageview(window.location.pathname);
    const handleRouteChange = (url) => {
      ReactGA.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);


  return (
    <>
      {/* <Head>
        <link rel="canonical" href="https://www.grogrip.com/home" />
        <meta name="google-site-verification" content="P1rLSRxY5hQ4--9Ktuz6cXNRY9bkDRqtloyNq1wein0" />
      </Head> */}
      {
        domLoaded &&
        <Provider store={store}>
        <Component {...pageProps} />
        <Analytics />
      </Provider>
      }
      <SEO title={title} pageDescription={description} keywords={keywords} ogImage={ogImage}></SEO>
    </>
  )
}

export default MyApp
