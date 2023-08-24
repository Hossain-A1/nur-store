export const PriceFormatter =(amount)=>{
  return amount?.toLocaleString('en-US',{
    style:"currency",
    currency:"USD",
    
  })
}