
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoadingScreen from '../components/Loader/LoadingScreen';

export default function Home() {
  const router = useRouter();

  useEffect(() => {

    function sayHello() {
      router.push('./home')
      // console.log();
    }

    setTimeout(sayHello, 1050);
  }, [])

  return (
    <LoadingScreen />
  )
}
