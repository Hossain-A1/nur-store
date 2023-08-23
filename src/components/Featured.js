import { useProductsContexts } from "../context/productContext";
import Product from "./Product";

const Featured = () => {
  const { isLoading, featureProducts } = useProductsContexts();

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  return (
    <>
      <div className='wrapper'>
        <div className='intro-data'>Check Now!</div>
        <div className='common-heading'>Our Feature Services</div>
        <div className='flex max-md:flex-col justify-between items-center max-md:gap-5'>
          {featureProducts.length > 0 &&
            featureProducts.map((curElem) => (
              <Product key={curElem.id} curElem={curElem} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
