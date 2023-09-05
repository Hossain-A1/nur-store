import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../contexts/filterContext";
import { PriceFormatter } from "../helpers/PriceFromatter";
import Button from "./Button";

const FilterSection = () => {
  const {
    filter_search: { text,  color, price, maxPrice, minPrice },
    handleSearchValue,
    handleClearFilters,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((el) => {
      return el[property];
    });
    if (property === "colors") {
      return (newValue = ["All", ...new Set([].concat(...newValue))]);
    }
    return (newValue = ["All", ...new Set(newValue)]);
  };

  // unique data
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <section className=''>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className='border-2 border-gray-700 py-1 px-4 w-40 h-8 rounded  outline-none focus:border-violet-700 duration-300'
          type='text'
          name='text'
          value={text}
          onChange={handleSearchValue}
          placeholder='Search'
        />
      </form>

      <div className='category flex flex-col gap-2 py-5 '>
        <h2 className='text-lg font-semibold '>Category</h2>

        <div className='flex flex-col gap-5 items-start '>
          {categoryData.map((el, i) => (
            <button
              key={i}
              type='button'
              name='category'
              onClick={handleSearchValue}
              value={el}
            >
              {el}
            </button>
          ))}
        </div>
      </div>

      {/* ================= */}
      <div className='flex flex-col items-start gap-5'>
        <div className='company-data space-y-2'>
          <h2 className='text-lg font-semibold '>Company</h2>

          <form action='#'>
            <select
              name='company'
              id='company'
              className=''
              onClick={handleSearchValue}
            >
              {companyData.map((el, i) => {
                return (
                  <option value={el} key={i} name='company'>
                    {el}
                  </option>
                );
              })}
            </select>
          </form>
        </div>

        <div className='flex flex-col items-start gap-2'>
          <h2 className='text-lg font-semibold '>Colors</h2>

          <div className='flex justify-start items-center'>
            {colorsData.map((el, i) => {
              if (el === "All") {
                return (
                  <button
                    key={i}
                    type='button'
                    name='color'
                    value={el}
                    className='font-medium'
                    onClick={handleSearchValue}
                  >
                    All
                  </button>
                );
              }
              return (
                <button
                  key={i}
                  type='button'
                  name='color'
                  value={el}
                  style={{ backgroundColor: el }}
                  className={` ${
                    el === color
                      ? "rounded-full w-5 h-5 flex  items-center ml-2 cursor-pointer opacity-70 hover:opacity-100 duration-300 active-color"
                      : "rounded-full w-5 h-5 flex  items-center ml-2 cursor-pointer opacity-70 hover:opacity-100 duration-300"
                  }  `}
                  onClick={handleSearchValue}
                >
                  {color === el ? (
                    <FaCheck className='text-slate-200 text-sm' />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        <div className='max-min-volium space-y-2'>
          <h2 className='text-lg font-semibold '>Price</h2>
          <p>
            <PriceFormatter price={price} />
          </p>

          <input
            type='range'
            min={minPrice}
            max={maxPrice}
            name='price'
            value={price}
            onChange={handleSearchValue}
          />
        </div>

        <div className='clear-filter'>
          <Button
            to='#'
            color='red'
            placeholder='Clear filters'
            onClick={handleClearFilters}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
