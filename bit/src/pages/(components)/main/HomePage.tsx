import Mainlayouts from "@/pages/layouts/Mainlayouts";
import Head from "next/head";
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";
import BrandsSection from "./BrandSection";

const Homepage = () => {
  return (
    <Mainlayouts>
      <Head>
        <title>BitHaven Technologies</title>
      </Head>
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <BrandsSection />
      </section>
    </Mainlayouts>
  );
};

export default Homepage;
