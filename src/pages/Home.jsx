import React from "react";
import Formulario from "../components/formulario/Formulario";
import ListadoNoticias from "../components/listadoNoticias/ListadoNoticias";
import Titulo from "../components/titulo/Titulo";

const home = () => {
  return (
    <>
      <Titulo />
      <Formulario />
      <ListadoNoticias />
    </>
  );
};

export default home;
