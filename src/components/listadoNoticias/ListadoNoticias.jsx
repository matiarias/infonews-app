import React, { useEffect, useState } from "react";
import "../listadoNoticias/listadoNoticias.css";
import { newsApi } from "../../helpers/newsApi";
import { Link } from "react-router-dom";

const ListadoNoticias = () => {
  const [noticias, setNoticias] = useState({
    loading: true,
    datos: [],
  });

  useEffect(() => {
    newsApi("sports").then((respuesta) => {
      console.log(respuesta);
      setNoticias({
        loading: false,
        datos: respuesta,
      });
    });
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
          {noticias.datos.map((noticia, id) => (
            <div key={id} className="card border-dark">
              <img
                src={noticia.urlToImage}
                className="card-img-top news-img"
                alt="imagen noticia"
              />
              <div className="card-body">
                <h5 className="card-title">{noticia.title}</h5>
                <p className="card-text">{noticia.description}</p>
                <a href="#" className="btn btn-dark">
                  Ampliar Noticia
                </a>
              </div>
              <div class="card-footer">
                <small class="text-footer">{noticia.publishedAt}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListadoNoticias;
