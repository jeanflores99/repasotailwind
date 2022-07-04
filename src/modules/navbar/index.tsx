import React, { useState } from "react";
import { NextComponentType } from "next";
import MenuSvg from "../../../public/icon/svg/menu.svg";
import Close from "../../../public/icon/svg/close.svg";
import { Index as Show } from "@modules/common/show";
import { Menu } from "@modules/navbar/menu";
// import a from ""
const Index: NextComponentType = () => {
  const [open, setopen] = useState<boolean>(false);

  return (
    <>
      <header className="bg-[#0205c7] h-[72px] flex items-center justify-around sticky top-0 z-[1000] ">
        <div>
          <img
            src="https://percycordova.github.io/Guide/Assets/Guide%20Pre%20Militar%20Blanco_1%201.png"
            alt="logo_img"
          />
        </div>
        <div className="flex flex-col gap-y-3  w-[151px]  items-center ">
          <p className="font-semibold text-white text-[6.5px] w-[115px] font-[Poppins] leading-[10px]  text-center lg:w-[167px] lg:text-[10px] lg:leading-[15px]">
            Antes de matricularte obtén una
          </p>
          <button className="uppercase text-white bg-[#f00109] rounded-[96px] font-[poppins] h-[31px]  w-[115px] text-sm  lg:w-[181px] lg:text-[23px] lg:leading-[34px]">
            Clase gratis
          </button>
        </div>
        <div
          onClick={() => setopen(!open)}
          className="bg-blue-300 cursor-pointer bg-[rgba(255, 255, 255, 0.4)] rounded-md w-max h-max"
        >
          <img
            src={!open ? MenuSvg.src : Close.src}
            alt="svg"
            className="bg-transparent "
          />
          {/* <img src={Close.src} alt="close_svg" /> */}
        </div>
      </header>
      <Show condition={open}>
        <Menu />
      </Show>
    </>
  );
};

// display: flex;
// flex-direction: column;
// justify-content: space-between;
// height: 500px;
export default Index;
