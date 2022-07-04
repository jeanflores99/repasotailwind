import React, { useState } from "react";
import { Index as Show } from "@modules/common/show";
const Index = () => {
  const [ishover1, sethover1] = useState(false);
  const [ishover2, sethover2] = useState(false);

  return (
    <div className="wrapper-dirigimos">
      <div className="dirigimos-tittle">¿A quienés nos dirigimos?</div>
      <div className="dirigimos-items">
        <div className="dirigimos-item1">
          <div className="dirigimos-civiles">
            <Show
              condition={!ishover1}
              df={
                <div
                  className="flex w-[100%] h-[100%] rounded-full  "
                  // src="https://percycordova.github.io/Guide/Assets/civil.svg"
                  // alt="img_civiles"
                  onMouseOut={() => sethover1(false)}
                >
                  <div
                    className="flex text-[10px]  leading-[15px] text-center font-medium font-[Poppins] m-auto
                  lg:text-[13px] lg:leading-[20px] lg:font-normal"
                  >
                    Jóvenes que deseen postular a las Escuelas de Oficiales y
                    Sub oficiales (FF. AA) SERVICIO MILITAR
                  </div>
                </div>
              }
            >
              <img
                className="dirigimos-civiles-img"
                src="https://percycordova.github.io/Guide/Assets/civil.svg"
                alt="img_civiles"
                onMouseOver={() => sethover1(true)}
              />
            </Show>
          </div>
          <div className="dirigmos-civiles-text ">Civiles</div>
        </div>
        <div className="dirigimos-item2">
          <div className="dirigimos-militar">
            <Show
              condition={!ishover2}
              df={
                <div
                  className="flex w-[100%] h-[100%] rounded-full  "
                  // src="https://percycordova.github.io/Guide/Assets/civil.svg"
                  // alt="img_civiles"
                  onMouseOut={() => sethover2(false)}
                >
                  <div
                    className="flex text-[9px]  leading-[14px] text-center font-medium font-[Poppins] m-auto
                    lg:text-[11px] lg:leading-[16px] lg:font-normal"
                  >
                    Si estás prestando servicio militar o eres Licenciado y
                    quieres postular a una Escuela de Oficiales y Sub oficiales
                    (FF. AA), tenemos descuentos exclusivos para ti, gracias a
                    nuestro convenio con las FF. AA.
                  </div>
                </div>
              }
            >
              {" "}
              <img
                className="dirigimos-militar-img"
                src="https://percycordova.github.io/Guide/Assets/militar.svg"
                alt="img_militar"
                onMouseOver={() => sethover2(true)}
              />
            </Show>
          </div>
          <div className="dirigmos-militar-text">Servicio Militar</div>
        </div>
      </div>
    </div>
  );
};
export default Index;
