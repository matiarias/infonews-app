import React from "react";
import "../titulo/titulo.css";
import logo from "../../assets/news-logo.png";

const Titulo = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container d-flex justify-content-center align-items-center ">
          <img className="news-logo" src={logo} alt="logo" />
          <h2 className="title-nav">Infonews</h2>
        </div>
      </nav>
    </div>
  );
};

export default Titulo;
