import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContexts } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";
import SinglePageImages from "./components/SinglePageImages";
import { PriceFormatter } from "./helpers/PriceFromatter";
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import {MdSecurity} from "react-icons/md";

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
    stats,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${DETAILS_DATA}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className='wrapper min-h-screen'>
      <PageNavigation name={name} />

      <div className='grid grid-cols-2 gap-10'>
        <div className='page-img'>
          <SinglePageImages image={image} />
        </div>

        <div className='product-details flex flex-col gap-5 max-md:gap-3 items-start'>
          <h2>{name}</h2>
          <p>{stats}</p>
          <p>{reviews}</p>
          <p className='product-price'>
            MRP:
            <del>
              <PriceFormatter price={price + 230000} />
            </del>
          </p>

          <p>
            offer price: <PriceFormatter price={price} />
          </p>
          <p>{description}</p>

          <div className='product-warranty flex justify-between items-center'>
            <div className='product-facility flex justify-center items-center'>
              <TbTruckDelivery />
              <p className="text-xs font-medium capitalize">free delivery</p>
            </div>
            <div className='product-facility flex justify-center items-center'>
              <TbReplace />
              <p className="text-xs font-medium capitalize">1 week replacement</p>
            </div>
            <div className='product-facility flex justify-center items-center'>
              <TbTruckDelivery />
              <p className="text-xs font-medium capitalize">Nur delivered</p>
            </div>
            <div className='product-facility flex justify-center items-center'>
              <MdSecurity />
              <p className="text-xs font-medium capitalize">2 years warranty</p>
            </div>
          </div>

          <div className="data-info">
            <p>In stock:
              <span className="font-medium"> {stock>0 ? stock : "No have"}</span>
            </p>
            <p>
              Brand: <span className="font-medium">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
