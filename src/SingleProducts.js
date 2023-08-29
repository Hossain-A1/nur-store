import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContexts } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import SinglePageImages from "./components/SinglePageImages";
import { PriceFormatter } from "./helpers/PriceFromatter";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const DETAILS_DATA = "https://api.pujakaitem.com/api/products";

const SingleProducts = () => {
  const { singleProduct, isSingleLoading, getSingleProduct } =
    useProductsContexts();

  const { id } = useParams();

  const {
    name,
    price,
    company,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${DETAILS_DATA}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className='wrapper min-h-screen '>
      <PageNavigation name={name} />

      <div className='grid grid-cols-2 max-md:grid-cols-1 gap-10'>
        <div className='page-img'>
          <SinglePageImages image={image} />
        </div>

        <div className='product-details flex flex-col gap-3 items-start section-p capitalize'>
          <h2 className='tracking-widest text-xl font-semibold'>{name}</h2>
          <Star stars={stars} reviews={reviews} />

          <p className='product-price'>
            MRP:
            <del>
              <PriceFormatter price={price + 230000} />
            </del>
          </p>

          <p>
            offer price:{" "}
            <span className='font-bold'>
              <PriceFormatter price={price} />
            </span>
          </p>
          <p className='text-sm font-medium'>{description}</p>

          <div className='product-warranty flex justify-between gap-5 items-center'>
            <div className='product-facility flex  flex-col  items-center gap-2'>
              <TbTruckDelivery />
              <p className='text-xs font-medium capitalize'>free delivery</p>
            </div>
            <div className='product-facility flex flex-col   items-center gap-2'>
              <TbReplace />
              <p className='text-xs font-medium capitalize'>
                1 week replacement
              </p>
            </div>
            <div className='product-facility flex flex-col   items-center gap-2'>
              <TbTruckDelivery />
              <p className='text-xs font-medium capitalize'>Nur delivered</p>
            </div>
            <div className='product-facility flex flex-col   items-center gap-2'>
              <MdSecurity />
              <p className='text-xs font-medium capitalize'>2 years warranty</p>
            </div>
          </div>
          <hr className='border w-full' />

          <div className='data-info'>
            <p>
              In stock:
              <span className='font-medium'>
                {" "}
                {stock > 0 ? stock : "No stock"}
              </span>
            </p>
            <p>
              Brand: <span className='font-medium'>{company}</span>
            </p>
            <hr className='border mt-2 max-w-full w-[90%]' />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
