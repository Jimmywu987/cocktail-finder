import { Home } from "pages/Home";
import { Metric } from "pages/Metric";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/metric" element={<Metric />} />
    </Routes>
  );
};
