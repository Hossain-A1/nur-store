import React from 'react'
import { useFilterContext } from '../contexts/filterContext';
import GridView from './GridView';
import ListView from './ListView';

const AllProducts = () => {
  const {filter_products,handleGridView}= useFilterContext()
if(handleGridView){
  return <GridView products={filter_products}/>
}
if(handleGridView === false){
  return <ListView products={filter_products}/>
}
}

export default AllProducts