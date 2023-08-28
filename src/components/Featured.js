import { useProductsContexts } from "../context/productContext";
import Product from "./Product";

const Featured = () => {
  const { isLoading, featureProducts } = useProductsContexts();

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  return (
    <>
      <div className='wrapper pt-0 max-md:pt-32 space-y-5'>
        <p className='intro-data text-violet-700'>Check Now!</p>
        <h2 className='common-heading text-xl font-medium'>Our Feature Services</h2>
        <div className='flex max-md:flex-col justify-between items-center max-md:gap-5'>
          {featureProducts.length > 0 &&
            featureProducts.map((curElem,i) => (
              <div>
                <Product key={i} curElem={curElem} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
