import React from "react";

const Index = () => {
  return (
    <div className="wrapper-dirigimos">
      <div className="dirigimos-tittle">¿A quienés nos dirigimos?</div>
      <div className="dirigimos-items">
        <div className="dirigimos-item1">
          <div className="dirigimos-civiles">
            <img
              className="dirigimos-civiles-img"
              src="https://percycordova.github.io/Guide/Assets/civil.svg"
              alt="img_civiles"
            />
          </div>
          <div className="dirigmos-civiles-text ">Civiles</div>
        </div>
        <div className="dirigimos-item2">
          <div className="dirigimos-militar">
            <img
              className="dirigimos-militar-img"
              src="https://percycordova.github.io/Guide/Assets/militar.svg"
              alt="img_militar"
            />
          </div>
          <div className="dirigmos-militar-text">Servicio Militar</div>
        </div>
      </div>
    </div>
  );
};
export default Index;
