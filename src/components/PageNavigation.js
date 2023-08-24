import { NavLink } from "react-router-dom";

const PageNavigation = ({name}) => {
  return (
    <div className="flex justify-start items-center ">
      <NavLink to="/" className="text-green-700">
        home
      </NavLink>/
      <h2>{name}</h2>
    </div>
  )
}

export default PageNavigation