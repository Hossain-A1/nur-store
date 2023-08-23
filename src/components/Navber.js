import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";

const Navber = () => {
  const [icon, setIcon] = useState();

  return (
    <header className=' h-20 bg-slate-100 flex flex-col justify-center items-center fixed top-0 left-0 right-0 z-[9999] '>
      <nav className='wrapper   flex items-center justify-between   max-md:fixed  max-md:left-0 max-md:top-0 max-md:right-0 max-md:bottom-0  max-md:z-[999] '>
        <div className="max-md:fixed top-5">
          <h2 className='flex gap-1 text-xl border-2'><h2 className="bg-violet-700 text-slate-50 px-1 text-center">Nur</h2>Store</h2>
        </div>

        <div className={icon ? "navber active" : "navber"}>
          <ul className=' nav-lists'>
            <li className=''>
              <NavLink
                to='/'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                Home
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/about'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                About
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/products'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                Products
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/contact'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                Contact
              </NavLink>
            </li>
            <li className=''>
              <NavLink
                to='/login'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                login
              </NavLink>
            </li>
            <li className='relative'>
              <NavLink
                to='/cart'
                onClick={() => setIcon(false)}
                className='max-md:text-xl'
              >
                <FiShoppingCart className='text-xl max-md:text-2xl' />
                <span className='absolute -top-2 left-4 bg-violet-500 rounded-full text-xs '>
                  10
                </span>
              </NavLink>
            </li>
          </ul>

           {/* mobile responsive */}
        <div className='mobile-navber-btn  flex max-md:fixed max-md:top-5 max-md:right-5'>
          <CgMenu
            name='menu-outline'
            className='mobile-navber-icon text-4xl'
            onClick={() => setIcon(true)}
          />
          <CgClose
            name='close-outline'
            className='mobile-navber-icon close-outline'
            onClick={() => setIcon(false)}
          />
        </div>
        </div>
       
      </nav>
    </header>
  );
};

export default Navber;
