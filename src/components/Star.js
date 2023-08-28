import { FaStar, FaStarHalfAlt } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
  const indexStart = Array.from({ length: 5 }, (_, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= numbers ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className='flex justify-start items-center'>
    <h3 className="flex justify-start items-center text-yellow-500"> {indexStart}</h3>

      <span className='font-semibold ml-2'>({reviews})</span>
      <p> Customer reviews</p>
    </div>
  );
};

export default Star;
