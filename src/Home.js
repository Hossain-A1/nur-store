import React from "react";
import HeroSection from "./components/HeroSection";

const HomePage = () => {
  const data = {
    title: "Nur Store",
  };

  return (
    <div>
      <HeroSection myTitle={data} />
    </div>
  );
};

export default HomePage;
