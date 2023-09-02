import React from "react";
import AllProducts from "./components/AllProducts";
import Sort from "./components/Sort";
import FilterSection from "./components/FilterSection ";

const Products = () => {
  return (
    <main className="wrapper section-p">
      <div className='grid grid-cols-4 gap-10 '>
        <div className='col-span-1'>
          <FilterSection />
        </div>

        <div className='col-span-3 items-center'>
          <div className='sort'>
            <Sort />
          </div>
          <div className='main-products'>
            <AllProducts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
