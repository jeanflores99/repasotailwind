import React from "react";

const Index = () => {
  return (
    <div className="wrapper-descubre">
      <div className="wrapper-descubre-titulo">
        <div className="descubre-tittle">Descubre lo que te enseñaremos</div>
        <div className="descubre-text">
          Conoce más sobre nuestros <b>horarios</b>, los
          <b> asignaturas </b>que dictaremos y los pasos para
          <b> matricularte </b>descargando el <b>temario</b> de la Escuela a
          donde desees postular.
        </div>
      </div>
      <div className="wrapper-descubre-items">
        <div className="descubre-items1">
          <div className="descubre-items1-titulo">Oficiales</div>
          <div className="descubre-items1-medallas">
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_1.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_2.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_3.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_4.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
          </div>
          <button className="descubre-items1-btn">Descargar temario</button>
        </div>
        <div className="descubre-items2">
          <div className="descubre-items2-titulo">Oficiales</div>
          <div className="descubre-items2-medallas">
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_1.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0 "
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_2.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_3.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_4.png"
                alt=""
                className="block w-[64px] h-[80px] m-auto grayscale hover:grayscale-0"
              />
            </div>
          </div>
          <button className="descubre-items2-btn">Descargar temario</button>
        </div>
        <div className="descubre-items3">
          <div className="descubre-items3-titulo">Oficiales</div>
          <div className="descubre-items3-medallas">
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/beca18.png"
                alt=""
                className="block w-[160px] h-[50px] m-auto grayscale hover:grayscale-0"
              />
            </div>
            <div className="">
              <img
                src="https://percycordova.github.io/Guide/Assets/oficiales_2.png"
                alt=""
                className="block w-[90px] h-[86px] m-auto grayscale hover:grayscale-0"
              />
            </div>
          </div>
          <button className="descubre-items3-btn">Descargar temario</button>
        </div>
      </div>
      <div className="wrapper-descubre-price">
        <div className=" m-auto">
          <img
            src="https://percycordova.github.io/Guide/Assets/btn1.png"
            alt=""
            className=""
          />
        </div>
        <div className="grid bg-[#0205C7] rounded-3xl w-[100%] h-[100%] justify-around align-middle text-center m-auto  ">
          <p className="text-[30px] font-[Poppins] font-semibold">Desde</p>
          <p className="text-[40px] font-[Poppins] font-semibold">
            <small className="text-[20px] ">S/ </small>
            450
          </p>
          <p className="text-[30px] font-[Poppins] font-semibold">el ciclo</p>
        </div>
        <div className="m-auto ">
          <img
            src="https://percycordova.github.io/Guide/Assets/btn2.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default Index;
