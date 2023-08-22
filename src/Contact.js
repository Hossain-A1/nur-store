import React from "react";
import Button from "./components/Button";

const ContactPage = () => {
  return (
    <section className='wrapper section-p flex flex-col items-center justify-start gap-10'>
      <h2 className="text-xl font-medium text-center capitalize text-slate-900">feel free to contact us</h2>
      <div className='w-full h-[60vh] mb-20'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.8727791712267!2d50.094617437010335!3d26.42758178087177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fc83df937721%3A0x7d3b80f43597ec51!2sLuLu%20Mall%20-%20Dammam!5e0!3m2!1sen!2ssa!4v1692687058701!5m2!1sen!2ssa'
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          className='w-full h-full'
        ></iframe>
      </div>

      <div className='max-w-[50rem] m-auto'>
        <form className='form   p-5 border border-violet-200 section-p flex flex-col gap-5'>
          <div className='md:w-[30rem] w-auto'>
            <input
              type='text'
              placeholder='Name'
              required
              autoComplete='off'
              className='py-3 px-6 w-full   outline-none bg-slate-100 font-medium border-2 border-transparent focus:border-violet-700 duration-300 rounded'
            />
          </div>
          <div className='md:w-[30rem] w-auto'>
            <input
              type='email'
              placeholder='Email'
              required
              autoComplete='off'
              className='py-3 px-6 w-full outline-none bg-slate-100 font-medium border-2 border-transparent focus:border-violet-700 duration-300 rounded'
            />
          </div>
          <div className='md:w-[30rem] w-auto h-28'>
            <textarea
              type='text'
              placeholder='Inter your message'
              required
              autoComplete='off'
              className='py-3 px-6 w-full h-full resize-none  outline-none bg-slate-100 font-medium border-2 border-transparent focus:border-violet-700 duration-300 rounded'
            />
          </div>

          <Button  href='/email' color='transparent' placeholder='Send' />
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
