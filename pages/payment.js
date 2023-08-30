import React, { useState, useEffect } from 'react';
import CheckoutForm from '../components/checkoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';


// const stripePromise = loadStripe('pk_live_51NEKkzSJE0NizD7jCjuxJMXNzzEPfIavLwvSxpcCRE0u122lNA4ljd8xHz0Rpr9QMR8BYPl2Ks4w741Vw84dBipt00eC4fEnFs');   //Live
const stripePromise = loadStripe('pk_test_51NEKkzSJE0NizD7jHYUxCy0VyrzWBIJD9U3DI69WijOprDpZSWpKycyXTxoDGAPN3feqLCpZTSwT5efy27eZ68fk00tfxpU8aX');    //Test

const CheckoutScreen = () => {
    const router = useRouter()
    // console.log("data :", router.query.data)

    const options = {
        // passing the client secret obtained from the server
        // clientSecret: "pi_3MwIZwSB8NyItH1J1xnxHhls_secret_nf7qkMFVq2WqhnwAnqcA08pgc",
        clientSecret : router.query.data
    };
    return (
        options &&
        <>
            <Elements stripe={stripePromise} options={options} >
                {/* <Navbar /> */}
                <CheckoutForm />
                {/* <Footer /> */}
            </Elements>
        </>

    );
};

export default CheckoutScreen;
