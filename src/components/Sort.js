import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../contexts/filterContext";

const Sort = () => {
  const { grid_view, handleGridView, handleListView,handleSort  } = useFilterContext();



  return (
    <section className='flex justify-between items-center'>
      <div className='sort-list flex justify-center items-center border-none cursor-pointer gap-5'>
        <button onClick={handleGridView}>
          <BsFillGridFill
            className={
              grid_view ? "bg-black text-white text-3xl  p-1" : "text-3xl p-1"
            }
          />
        </button>
        <button onClick={handleListView}>
          <BsList
            className={
              !grid_view ? "bg-black text-white text-3xl p-1 " : "text-3xl p-1"
            }
          />
        </button>
      </div>

      <div className='product-data'>dd</div>

      {/* sort options */}
      <div className='drop'>
        <form action='#' className="border-2 border-violet-700 rounded">
          <label htmlFor='sort'></label>
          <select name='sort' id='sort' className='px-5 py-1 space-y-5' onClick={handleSort}>
            <option value='highest' className="">Highest</option>
            <option value='#' disabled></option>
            <option value='lowest'>Lowest</option>
            <option value='#' disabled></option>

            <option value='A-Z'>A-Z</option>
            <option value='#' disabled></option>
            <option value='Z-A'>Z-A</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;
