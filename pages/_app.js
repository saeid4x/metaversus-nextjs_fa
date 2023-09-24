import Head from "next/head";

import "../styles/globals.css";

// import localFont from "next/font/local";

// const iranSans = localFont({
//   src: "../public/fonts/IRANSans_Medium/IRANSans_Medium.ttf",
//   variable: "--font-iranSans",
//   display: "swap",
// });

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </>
);

export default MyApp;
