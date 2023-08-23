import { BsLinkedin } from "react-icons/bs";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className=''>
      <section className=' flex flex-col  items-center z-[100] -mb-10 '>
        <div className='grid grid-cols-2 bg-slate-100 gap-10 w-2/3 p-5 '>
          <div>
            <h3>Ready to get started</h3>
            <h3>Talk to us today</h3>
          </div>
          <div>
            <Button
              to="/contact"
              target="_blank"
              color='violet_btn'
              placeholder='Get started'
            />
          </div>
        </div>
      </section>

      <section className=' bg-black text-white'>
        <div className=' text-white grid grid-cols-4 max-md:grid-cols-1 pt-20 pb-10 gap-10 px-10'>
          <div className='flex flex-col max-md:items-center   gap-5 col-span-1'>
            <h3 className="capitalize font-medium">Nur store</h3>
            <p>Nur store providing reliable products since 1983, </p>
          </div>
          <div className='footer-subscribe flex flex-col items-center  gap-5 col-span-1'>
            <h3 className="capitalize font-medium">Subscribe to get important updates</h3>
            <form action='#' className='flex justify-between gap-10 items-center'>
              <input
                required
                type='email'
                name='email'
                placeholder='YOUR E-MAIL'
                className='py-3 px-6 rounded outline-none text-slate-700'
              />

              <input
                type='submit'
                value='subscribe'
                className='bg-violet-700 py-3 px-6 uppercase cursor-pointer'
              />
            </form>
          </div>
          <div className='flex flex-col items-center gap-5 col-span-1'>
            <h3 className="capitalize font-medium">Follow Us</h3>
            <div className='footer-social--icons flex gap-1'>
              <div className="border rounded-full p-3">
                <a href="https://www.linkedin.com/in/hossain-ahmed-163b11236/" target="_blank">
                <BsLinkedin className='text-xl' />

                </a>
              </div>
              <div  className="border rounded-full p-3">
                <a href="https://twitter.com/Hossain08343121" target="_blank">

                <FaTwitter className='text-xl' />
                </a>
              </div>
              <div className="border rounded-full p-3">
                <a
                  href='https://www.youtube.com/channel/UCdu8R2j9tsp2qJW6q41v-yw'
                  target='_blank'
                >
                  <FaYoutube className='text-xl' />
                </a>
              </div>
            </div>
          </div>
          <div className='footer-contactflex flex-col  gap-5 items-center col-span-1 '>
          <div className="flex flex-col items-center">
          <h3 className="capitalize font-medium">Call Us</h3>
            <h3>+66 0501747626</h3>
            <NavLink to='/contact' className="max-md:text-xl">
                Contact
              </NavLink>
          </div>
          </div>
        </div>

        <div className='footer-bottom--section '>
          <hr />
          <div className='container grid grid-cols-2 max-md:grid-cols-1 wrapper py-2 '>
            <p>
              &copy;{new Date().getFullYear()} NurStore. All Rights Reserved.
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
