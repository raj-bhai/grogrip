import React, { useState, useEffect } from 'react';
import CheckoutForm from '../components/checkoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';

const stripePromise = loadStripe('pk_test_51NVrWQSC4DHOAyFpl0P9sQsc1QeYRA5Nk80PrMTOPPjxnBnTFK19MckYvl6qBYhU2LoYjMeUtkBmWXYDDoES2O2x00ltagDGLp');

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
