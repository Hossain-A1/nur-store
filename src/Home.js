import React from "react";
import HeroSection from "./components/HeroSection";
import Services from  "./components/Services"
import Trusted from "./components/Trusted";

const HomePage = () => {
  const data = {
    title: "Nur Store",
  };

  return (
    <div>
      <HeroSection myTitle={data} />
      <Services/>
      <Trusted/>

    </div>
  );
};

export default HomePage;
