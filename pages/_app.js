import Head from 'next/head';
import 'antd/dist/antd.css';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1JSRJXFV7Q"></Script>
      <Script>
        {`

          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())

          gtag('config', 'G-1JSRJXFV7Q')

        `}
      </Script>

      <Head>
        <link rel='manifest' href='/manifest.json' />
        <link rel="shortcut icon" href="/img/favicon.png" />
        <link rel="icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon" href="/img/favicon.png" />
        <link rel="apple-touch-icon-precomposed" href="/img/favicon.png" />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5'
        />
        <meta
          name='description'
          content='Swap collateral, debt or trade on margin with 1delta - Building leverage has never been easier in crypto.'
        />{' '}
        <meta name='keywords' content='decentralized crypto leverage margin broker polygon uniswap dex compound 0vix aave' />
        <meta property='og:title' content='1delta - The decentralized crypto margin broker.' key='title' />
        <meta
          property="og:image"
          content="https://www.1delta.io/img/favicon.png"
        />

        <meta
          property="og:description"
          content="Swap collateral, debt or trade on margin with 1delta - Building leverage has never been easier in crypto."
        />
        <meta name='theme-color' content='#f0f6f0' />
        <title>1delta | The decentralized margin aggregator</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
