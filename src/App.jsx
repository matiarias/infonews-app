import React from "react";
import Titulo from "./components/titulo/Titulo";
import Formulario from "./components/formulario/Formulario";
import ListadoNoticias from "./components/listadoNoticias/ListadoNoticias";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "./css/app.css";

const App = () => {
  return (
    <>
      <Titulo />
      <Formulario />
      <ListadoNoticias />
    </>
  );
};

export default App;
