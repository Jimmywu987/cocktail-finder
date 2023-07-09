import { Home } from "pages/Home";
import { DrinkDetail } from "pages/DrinkDetail";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:drinkName" element={<DrinkDetail />} />
    </Routes>
  );
};
