import { NextComponentType } from "next";
import React from "react";

const url = "https://percycordova.github.io/Guide/Assets/Tropa-28-lg.png";
//mx-40 xl
const Index: NextComponentType = () => {
  return (
    <div className="wrapper-banner">
      <div className="wrapper-text">
        <div className="preparate">
          PREPÁRATE PARA INGRESAR A LAS ESCUELAS DE LAS FF.AA O PNP
        </div>
        <button className="inscribirme">INSCRIBIRME</button>
      </div>
      <div className="wrapper-logo ">
        <img src={url} alt="banner_img" className="mx-auto" />
      </div>
    </div>
  );
};
export default Index;
