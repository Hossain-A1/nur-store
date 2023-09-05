import React from "react";
import HeroSection from "./components/HeroSection";
import Services from  "./components/Services"
import Trusted from "./components/Trusted";
import FeatureSection from "./components/FeatureSection";

const HomePage = () => {
  const data = {
    title: "Nur Store",
  };

  return (
    <div className="">
      <HeroSection myTitle={data} />
      <FeatureSection/>
      <Services/>
      <Trusted/>

    </div>
  );
};

export default HomePage;
