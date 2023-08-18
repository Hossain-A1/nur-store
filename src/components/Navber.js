import React from "react";
import { NavLink } from "react-router-dom";
import {FiShoppingCart} from "react-icons/fi"
import {CgClose, CgMenu} from "react-icons/cg"

const Navber = () => {

 
   
const menu = ()=>{

}

  return (
    <header className="wrapper  bg-slate-100">
      <nav className=" h-20 md:flex  md:justify-between md:items-center  ">
      
      <div className="flex justify-between items-center px-8">
      <h2 className="text-xl">Eshop</h2>
 
      {/* mobile responsive */}
      <div className="mobile-navber-btn md:hidden bg-transparent cursor-pointer border-none block  ">
 <button className="none" onClick={menu}> <CgMenu   /></button>
         </div>
      </div>
 
 
         <ul className="md:flex  md:items-center gap-5 z-[9999] md:z-auto md:static absolute bg-slate-100 w-full left-0 md:w-auto md:py-0 py-5 md:pl-0 pl-8 ">
           <li className=" my-6 md:my-0">
             <NavLink to='/'>Home</NavLink>
           </li>
           <li className=" my-6 md:my-0">
             <NavLink to='/about'>About</NavLink>
           </li>
           <li className=" my-6 md:my-0">
             <NavLink to='/products'>Products</NavLink>
           </li>
           <l i className=" my-6 md:my-0">
             <NavLink to='/contact'>Contact</NavLink>
           </l>
           <li className=" my-6 md:my-0">
             <NavLink to='/login'>login</NavLink>
           </li>
           <li className="relative  my-6 md:my-0">
             <NavLink to='/cart'><FiShoppingCart className="text-xl"/>
             <span className="absolute -top-2 left-4 bg-violet-500 rounded-full text-xs ">10</span></NavLink>
           </li>
         </ul>
 
       
     </nav>
    </header>
  );
};

export default Navber;
