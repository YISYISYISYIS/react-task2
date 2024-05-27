import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = ({ books, setBooks }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home books={books} setBooks={setBooks} />} />
        <Route
          path="/Detail/:id"
          element={<Detail books={books} setBooks={setBooks} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
