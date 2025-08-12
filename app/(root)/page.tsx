import { CTABanner } from "@/components/molecules/cta/cta";
import { Faq } from "@/components/molecules/faq/faq";
import { Hero } from "@/components/molecules/hero/hero";
import { HowItWorks } from "@/components/molecules/how-it-works/how-it-works";

import { Impact } from "@/components/molecules/impact/impact";
import { Testimonials } from "@/components/molecules/testimonials/testimonials";
import React from "react";

const Home = () => {
  return (
    <section>
      <Hero />
      <HowItWorks />
      <Impact />
      <Testimonials />
      <CTABanner />
      <Faq />
    </section>
  );
};

export default Home;
