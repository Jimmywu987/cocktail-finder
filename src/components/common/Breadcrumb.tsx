import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { selectedDrinkSelector } from "redux/selectedDrink";

export const Breadcrumb = () => {
  const location = useLocation();
  const { selectedDrink } = useSelector(selectedDrinkSelector);
  return (
    <div className="breadcrumb">
      <NavLink to="/">Home</NavLink>
      {selectedDrink && (
        <>
          <span> / </span>
          <div> {selectedDrink.strDrink}</div>
        </>
      )}
    </div>
  );
};
