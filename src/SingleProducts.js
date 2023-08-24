import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useProductsContexts } from "./context/productContext";
import PageNavigation from "./components/PageNavigation";


const DETAILS_DATA = "https://api.pujakaitem.com/api/products"

const SingleProducts = () => {

  const {singleProduct,isSingleLoading,getSingleProduct} = useProductsContexts()
  console.log(singleProduct);

  const {id} = useParams()

  const {name,price,company,description,category,stock,reviews,stats} = singleProduct

  useEffect(()=>{
    getSingleProduct(`${DETAILS_DATA}?id=${id}`)
  },[])


  return (
    <div className='wrapper section-p min-h-screen'>
      <PageNavigation name={name}/>
    </div>
  )
}

export default SingleProducts