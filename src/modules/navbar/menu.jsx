import React from "react";

export const Menu = () => {
  return (
    <div className="fixed right-0 top-[72px] w-[100%] sm:w-[50%]  z-50 bg-white rounded-b-lg sm:right-[100px] md:w-[40%] md:right-[150px] lg:w-[27%] lg:right-[240px] ">
      <nav className="flex flex-col justify-around h-[321px]  mx-2">
        <a href="" className="w-[max] h-max border-b-[1px] border-b-black font-[Poppins] leading-[27px]">
          Acerca de GUIDE
        </a>
        <a className="w-[max] h-max border-b-[1px] border-b-black font-[Poppins] leading-[27px]">
          ¿Pór que nostotros?
        </a>
        <a className="w-[max] h-max  border-b-[1px] border-b-black font-[Poppins] leading-[27px]">
          ¿A quienes nos dirigimos?
        </a>
        <a className="w-[max] h-max  border-b-[1px] border-b-black font-[Poppins] leading-[27px]">
          Descubre lo que te enseñaremos
        </a>
        <a className="w-[max] h-max  border-b-[1px] border-b-black font-[Poppins] leading-[27px]">
          Explora nuestra aula virtual
        </a>
        <a className="w-[max] h-max  border-b-[1px] border-b-black font-[Poppins] leading-[27px]">
          Nuestros Ingresantes
        </a>
      </nav>
    </div>
  );
};
