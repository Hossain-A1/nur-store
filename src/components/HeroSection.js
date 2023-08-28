import React from "react";
import Button from "./Button";

const HeroSection = ({ myTitle }) => {

  const {title} = myTitle

  return (
    <section className='wrapper section-p h-[calc(100vh-5rem)]'>
      <div className=' grid grid-cols-2 max-md:grid-cols-1 gap-9 max-md:gap-10 items-center'>
        <div className='hero-data '>
          <p className='text-violet-400'>Welcome to</p>
          <h1 className='text-2xl font-semibold capitalize mb-2'>{title}</h1>
          <p className=''>
            This website is user-friendly and has an easy-to-use interface. We
            also provide excellent customer service and have a wide variety of
            payment options
          </p>
          <p className='mt-5'>
            <Button
              to='/products'
              color='violet_btn'
              placeholder='Shop now'
            />
          </p>
        </div>

        {/* homepage images */}
        <div className='hero-images   w-full md:w-11/12 h-auto flex justify-center items-center '>
          <figure className=' relative after:content-normal  after:my-10 after:w-[60%] after:h-[80%] after:bg-violet-400 after:absolute after:left-1/2 max-md:after:left-1/3 max-md:after:-top-[4.4rem] after:-top-[5rem] after:z-[-1] '>
            <img
              src='images/home-image.jpeg'
              alt='hero-image'
              className='w-full h-auto '
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
