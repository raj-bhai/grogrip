
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoadingScreen from '../components/Loader/LoadingScreen';

export default function Home() {
  const router = useRouter();

  useEffect(() => {

    function sayHello() {
      if (localStorage.getItem('token')) {
        router.push('./home')
      } else {
        localStorage.setItem("token", "1234");
        router.push('./home')
      }
    }

    setTimeout(sayHello, 500);
  }, [])

  return (
    <LoadingScreen />
  )
}
