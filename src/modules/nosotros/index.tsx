import { NextComponentType } from "next";
import React from "react";

const Index = () => {
  return (
    <div className="wrapper-nosotros">
      <div className="nosotros-tittle">¿Por qué nosotros?</div>
      <div className="wrapper-items">
        <div className="nosotros-item1">
          <div className="font-[Poppins] not-italic font-bold text-[72px] leading-[108px] text-center text-[#0205C7]">+5</div>
          <div className="font-[Poppins] not-italic font-bold text-[18px] leading-[27px] text-center">Más de 5 años de experiencia</div>
        </div>
        <div className="nosotros-item2">
          <div className="font-[Poppins] not-italic font-bold text-[72px] leading-[108px] text-center text-[#0205C7]">50</div>
          <div className="font-[Poppins] not-italic font-bold text-[18px] leading-[27px] text-center">Profesores e instructores</div>
        </div>
        <div className="nosotros-item3">
          <div className="font-[Poppins] not-italic font-bold text-[72px] leading-[108px] text-center text-[#0205C7]">90%</div>
          <div className="font-[Poppins] not-italic font-bold text-[18px] leading-[27px] text-center">De nuestros estudiantes alcanzan una vacante</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
