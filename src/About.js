import React from 'react'
import HeroSection from './components/HeroSection';

const AboutPage = () => {
  const data = {
    title:"Nur Ecomerce"
  }
  return (
    <div>
      <HeroSection myTitle={data} />
      
    </div>
  )
}

export default AboutPage