import React from "react";
import "../formulario/formulario.css";
import { newsApi } from "../../helpers/newsApi";

const Formulario = () => {
  const buscar = {
    category: [
      "business",
      "entertainment",
      "general",
      "health",
      "science",
      "sports",
      "technology",
    ],
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <select
            className="form-select text-center p-2"
            aria-label="Default select example"
          >
            <option selected disabled>
              Buscar Noticias por categoria
            </option>
            {buscar.category.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
