import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>My Top - наш лучший топ</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
