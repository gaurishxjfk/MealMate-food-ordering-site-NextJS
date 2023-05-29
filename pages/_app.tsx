import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import { SessionProvider } from "next-auth/react";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Head>
          <title>MealMate</title>
          <meta
            name="description"
            content="MealMate is online food ordering website"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
