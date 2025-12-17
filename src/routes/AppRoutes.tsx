import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import FormShipping from "../components/FormShipping";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shipping/:id" element={<FormShipping />} />
    </Routes>
  );
};

export default AppRoutes;
