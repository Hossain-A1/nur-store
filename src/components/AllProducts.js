import React from 'react'
import { useFilterContext } from '../contexts/filterContext';
import GridView from './GridView';
import ListView from './ListView';

const AllProducts = () => {
  const {filter_products,grid_view}= useFilterContext()
  
if(grid_view){
  return <GridView products={filter_products}/>
}
if(!grid_view){
  return <ListView products={filter_products}/>
}
}

export default AllProducts