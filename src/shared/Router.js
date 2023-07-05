import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoDetail from "../pages/TodoDetail";
import Todos from "../pages/Todos";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todos />} />
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        <Route path="/detail/:id" element={<TodoDetail />} />
      </Routes>
      </BrowserRouter>
  );
};

export default PageRouter;