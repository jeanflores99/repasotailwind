import { NextComponentType } from "next";
import React from "react";

const Index = () => {
  return (
    <div className="wrapper-nosotros">
      <div className="nosotros-tittle">¿Por qué nosotros?</div>
      <div className="wrapper-items">
        <div className="nosotros-item1">
          <div
            className="font-[Poppins] not-italic font-bold text-[72px] m-auto leading-[108px] text-center text-[#0205C7]
           w-[102px] h-[89px]
          lg:text-[100px] lg:leading-[150px] lg:w-[143px] lg:h-[140px]
            "
          >
            +5
          </div>
          <div className="font-[Poppins] not-italic font-medium text-[18px]  m-auto leading-[27px] text-center
           w-[155px] h-[51px] mix-blend-normal
            lg:text-[24px] lg:leading-[36px] lg:w-[274px] lg:h-[75px]">
            Más de 5 años de experiencia
          </div>
        </div>
        <div className="nosotros-item2">
          <div className="font-[Poppins] not-italic font-bold text-[72px] m-auto leading-[108px] text-center text-[#0205C7]
         w-[102px] h-[89px]
          lg:text-[100px] lg:leading-[150px] lg:w-[143px] lg:h-[140px]">
            50
          </div>
          <div className="font-[Poppins] not-italic font-medium text-[18px]  m-auto leading-[27px] text-center
           w-[155px] h-[51px] mix-blend-normal
            lg:text-[24px] lg:leading-[36px] lg:w-[274px] lg:h-[75px]">
            Profesores e instructores
          </div>
        </div>
        <div className="nosotros-item3">
          <div className="font-[Poppins] not-italic font-bold text-[72px] m-auto leading-[108px] text-center text-[#0205C7]
           w-[102px] h-[89px]
          lg:text-[100px] lg:leading-[150px] lg:w-[143px] lg:h-[140px]">
            90%
          </div>
          <div className="font-[Poppins] not-italic font-medium text-[18px]  m-auto leading-[27px] text-center
       w-[155px] h-[51px] 
            lg:text-[24px] lg:leading-[36px] lg:w-[274px] lg:h-[75px]">
            De nuestros estudiantes alcanzan una vacante
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
