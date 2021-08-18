import React from "react";

export default function Introduction() {
  return (
    <div className="introduction">
      <div className="introduction-content">
        <h1 className="introduction-title">
          ¡Bienvenidos a nuestro espacio en la web!
        </h1>
        <hr></hr>
        <p className="introduction-paragraph">
          Si te gusta la decoración hecha a mano, te invito a ver todo lo que
          tenemos en este emprendimiento.
        </p>
      </div>
      <div className="introduction-content">
        <img
          src="/images/logo.jpeg"
          alt="logo"
          className="introduction-image"
        />
      </div>
    </div>
  );
}
