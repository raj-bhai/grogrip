import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import CheckoutForm from '../components/payment';

const stripePromise = loadStripe('sk_test_51NVrWQSC4DHOAyFpexSHjRfPjUVfIyhvDqOWOkyuE71GsNy2WIQ82V3b8nNjPn5RFjhomb5MJAl21oncYLLI9fBM0086z8DskY');

const CheckoutScreen = () => {
    const router = useRouter()

    const options = {
        clientSecret : router.query.data
    };
    return (
        options &&
        <>
            <Elements stripe={stripePromise} options={options} >
                <CheckoutForm
                
                />
            </Elements>
        </>

    );
};

export default CheckoutScreen;
