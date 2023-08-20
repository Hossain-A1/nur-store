import { cva } from "class-variance-authority";
import clsx from "clsx";
import { Link } from "react-router-dom";

const buttonVariance = cva(
  "px-4 py-3 duration-300",

  {
    variants: {
      color: {
        violet_btn: "bg-violet-700 text-white hover:bg-violet-700/90 uppercase text-xs",
        dark: "bg-gray-700 text-white hover:bg-gray-700/90",
        ghost:
          "bg-transparent border w-full text-center  text-gray-700 hover:bg-gray-500/10",
        transparent:
          "bg-transparent border font-semibold rounded-lg w-full text-center text-white hover:bg-gray-500/10",
      },
    },
    defaultVariants: {
      color: "dark",
    },
  }
);

const Button = ({ href, placeholder, color }) => {
  return (
    <Link href={href} className={clsx(buttonVariance({ color }))}>
      {placeholder}
    </Link>
  );
};

export default Button;