import React from "react";
import HeroSection from "./components/HeroSection";
import Services from  "./components/Services"
import Trusted from "./components/Trusted";
import Featured from "./components/Featured";

const HomePage = () => {
  const data = {
    title: "Nur Store",
  };

  return (
    <div className="">
      <HeroSection myTitle={data} />
      <Featured/>
      <Services/>
      <Trusted/>

    </div>
  );
};

export default HomePage;
