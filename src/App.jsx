import React from "react";
import Titulo from "./components/titulo/Titulo";
import ListadoNoticias from "./components/listadoNoticias/ListadoNoticias";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./css/app.css";

const App = () => {
  return (
    <>
      <Titulo />
      <ListadoNoticias />
    </>
  );
};

export default App;
