import { PriceFormatter } from "../helpers/PriceFromatter";
import Button from "../components/Button"
const ListView = ({ products }) => {
  return (
    <section>
      <div className='wrapper section-p flex flex-col gap-5 items-center'>
        {products.map((curElem) => {
          const { id, name, price,image, description } =curElem;

          return(
            <div className="grid grid-cols-2 border gap-10 items-center p-5 shadow-lg">

<figure>
  <img src={image} alt={name} />
</figure>

<div className="flex flex-col items-start gap-3">
  <h2>{name}</h2>
  <p>{(description).substring(0,113)}...</p>
  <span><PriceFormatter price={price}/></span>
  <Button to={`/singleproducts/${id}`} color="dark" placeholder="view details"/>
</div>
            </div>
          
          )
        })}
      </div>
    </section>
  );
};

export default ListView;
