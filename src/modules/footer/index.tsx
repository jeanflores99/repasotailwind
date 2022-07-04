import React from "react";
import { AiOutlineWhatsApp as Wsp } from "react-icons/ai";

const Index = () => {
  return (
    <div className="wrapper-footer">
      <div className="w-[90%] mt-6 m-auto flex  lg:flex-row-reverse lg:w-[60%] ">
        <div className=" m-auto w-[100%] lg:w-auto">
          <p className="text-[20px]">Conócenos</p>
          <ul>
            <li>- Aula Virtual</li>
            <li>- Blog</li>
          </ul>
        </div>
        <div className="    m-auto w-[66px] h-[61px] lg:w-[113px] lg:h-[106px]">
          <img
            src="https://percycordova.github.io/Guide/Assets/Guide%20Pre%20Militar%20Blanco_1%201.png"
            alt=""
            className="w-[100%] h-[100%] "
          />
        </div>
      </div>
      <div className="w-[90%] mt-6 m-auto flex flex-col lg:flex-row lg:justify-around ">
        <div className="">
          <p className="text-[20px] ">Contacto</p>
          <ul className="">
            <li className="flex justify-items-center align-middle m-auto">
              <img
                src="https://percycordova.github.io/Guide/Assets/gps.svg"
                alt=""
                className="w-[12px] h-[11px] mt-2 mr-2"
              />
              Alfredo Benavides 1944, piso 09, Miraflores 15048.
            </li>
            <li className="flex justify-items-center align-middle m-auto">
              <img
                src="https://percycordova.github.io/Guide/Assets/telefono.svg"
                alt=""
                className="w-[12px] h-[11px] mt-2 mr-2"
              />
              938 561 890
            </li>
            <li className="flex justify-items-center align-middle m-auto">
              <img
                src="https://percycordova.github.io/Guide/Assets/correo.svg"
                alt=""
                className="w-[12px] h-[11px] mt-2 mr-2"
              />
              info@guideasesores.com
            </li>
            <li className="flex justify-items-center align-middle m-auto">
              <img
                src="https://percycordova.github.io/Guide/Assets/hora.svg"
                alt=""
                className="w-[12px] h-[11px] mt-2 mr-2"
              />
              10 am a 7:30 pm
            </li>
          </ul>
        </div>
        <div className="">
          <p>Redes</p>
          <div className="flex justify-start  gap-x-4 mt-2">
            <img
              src="https://percycordova.github.io/Guide/Assets/fc.svg"
              alt=""
              className="w-[14px] h-[27px]"
            />
            <img
              src="https://percycordova.github.io/Guide/Assets/instagram.svg"
              alt=""
              className="w-[28.89px] h-[28.89px]"
            />
            <img
              src="https://percycordova.github.io/Guide/Assets/youtube.svg"
              alt=""
              className="w-[40.01px] h-[27px]"
            />
          </div>
        </div>
      </div>
      <div className="footer-fixed">
        <div className="btn-wsp ">
          <Wsp className="w-[22px] h-[22px] my-auto" />
          <div className="my-auto">¿En qué podemos ayudarte?</div>
        </div>
      </div>
    </div>
  );
};
export default Index;
