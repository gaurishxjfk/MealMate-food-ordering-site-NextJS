import Hero_section from "../components/hero-section";
import Trending_section from "../components/trending-section"
import Menu_section from "../components/menu-section"
import Review_section from "../components/reviews-section"
import Footer from "../components/footer"
import { ReactElement } from "react";

export default function Home(): ReactElement {
  return (
    <div>
      <Hero_section />
      <Trending_section />
      <Menu_section showFullMenu={false}/>
      <Review_section />
      <Footer />
    </div>
  );
}
