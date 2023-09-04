import { cva } from "class-variance-authority";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const buttonVariance = cva(
  "px-4 py-3 duration-300",

  {
    variants: {
      color: {
        violet_btn:
          "bg-violet-700 text-white hover:bg-violet-700/90 uppercase text-xs",
        dark: "bg-gray-700 text-white rounded-lg hover:bg-gray-700/90",
        red:
          "bg-rose-700 border w-full text-center  text-slate-900 hover:bg-rose-700/90",
        transparent:
          "bg-transparent border font-semibold rounded w-[7rem] text-center text-stale-900 hover:bg-gray-500/10",
      },
    },
    defaultVariants: {
      color: "dark",
    },
  }
);

const Button = ({ to, placeholder, color,target,onClick }) => {
  return (
    <NavLink to={to} target={target} onClick={onClick} className={clsx(buttonVariance({ color }))}>
      {placeholder}
    </NavLink>
  );
};

export default Button;
