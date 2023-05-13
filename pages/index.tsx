import Head from "next/head";
import Nav from "../components/nav";
import Hero_section from "../components/hero-section";
import Trending_section from "../components/trending-section"
import Menu_section from "../components/menu-section"
import Review_section from "../components/reviews-section"
import Footer from "../components/footer"
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>MealMate</title>
        <meta
          name="description"
          content="MealMate is online food ordering website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero_section />
      <Trending_section />
      <Menu_section />
      <Review_section />
      <Footer />
    </div>
  );
}
