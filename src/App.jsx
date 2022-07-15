import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoticiaAmpliada from "./pages/NoticiaAmpliada";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./css/app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/noticia" element={<NoticiaAmpliada />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
