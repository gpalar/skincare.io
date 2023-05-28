import './../styles/globals.css';
import '../styles/product.css';
import Head from 'next/head';
import ReactGA from 'react-ga';
import React, { useEffect } from 'react';

ReactGA.initialize('G-BC6CD566JM');

export default function App({ Component, pageProps }) {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return <>
        <Head>
            <title>skincare.io</title>
            <link rel="icon" href="sparkle-logo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} /></>;
}