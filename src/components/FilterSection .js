import { useFilterContext } from "../contexts/filterContext";

const FilterSection = () => {
  const {
    filter_search: { text ,category},
    handleSearchValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newValue = data.map((el) => {
      return el[property];
    });

    return (newValue = ["All", ...new Set(newValue)]);
  };

  // unique data
  const categoryData = getUniqueData(all_products, "category");

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

      <div className='category flex flex-col gap-5 py-5 '>
        <h2>Category</h2>

        <div className="flex flex-col gap-5 items-start ">
          {categoryData.map((el, i) => (
            <button
              key={i}
              type='button'
              name='category'
              onClick={handleSearchValue}
              value={el}
            >{el}</button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
