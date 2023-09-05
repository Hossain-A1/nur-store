import { NavLink } from "react-router-dom";
import { PriceFormatter } from "../helpers/PriceFromatter";

const Product = ({ id, name, image, price, category } ) => {
  

  return (
    <NavLink to={`/singleproducts/${id}`}>
      <div className='card relative'>
        <figure className='w-[18rem] h-[10rem]'>
          <img src={image} alt={name} className='h-full w-full object-fill' />
          <figcaption className='absolute top-1 right-0 bg-slate-50/50 text-center px-2 rounded-full'>
            {category}
          </figcaption>
        </figure>

        <div className='card-data'>
          <div className='flex justify-between items-center'>
            <h3>{name}</h3>
            <p className='card-data--price'>
              <PriceFormatter price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
