import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgClose, CgMenu } from "react-icons/cg";

const Navber = () => {
  const [icon, setIcon] = useState();

  return (
    <header className='  bg-slate-100 flex items-end justify-between'>
      <nav className=' wrapper h-20 flex justify-between items-center md:flex  md:justify-between md:items-center   '>
        <h2 className='text-xl'>Eshop</h2>

        <div className={icon ? "navber active" : "navber"}>
          <ul className=' nav-lists'>
            <li className=''>
              <NavLink to='/' onClick={() => setIcon(false)} className="max-md:text-xl">
                Home
              </NavLink>
            </li>
            <li className=''>
              <NavLink to='/about' onClick={() => setIcon(false)}  className="max-md:text-xl">
                About
              </NavLink>
            </li>
            <li className=''>
              <NavLink to='/products' onClick={() => setIcon(false)} className="max-md:text-xl">
                Products
              </NavLink>
            </li>
            <li className=''>
              <NavLink to='/contact' onClick={() => setIcon(false)} className="max-md:text-xl">
                Contact
              </NavLink>
            </li>
            <li className=''>
              <NavLink to='/login' onClick={() => setIcon(false)} className="max-md:text-xl">
                login
              </NavLink>
            </li>
            <li className='relative'>
              <NavLink to='/cart' onClick={() => setIcon(false)} className="max-md:text-xl">
                <FiShoppingCart className='text-xl max-md:text-2xl' />
                <span className='absolute -top-2 left-4 bg-violet-500 rounded-full text-xs '>
                  10
                </span>
              </NavLink>
            </li>
          </ul>

          {/* mobile responsive */}
          <div className='mobile-navber-btn  '>
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
