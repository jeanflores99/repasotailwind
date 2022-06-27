import React from "react";

const Index = () => {
  return (
    <div className="wrapper-aula">
      <div className="wrapper-aula-tittle">Explora nuestra aula virtual</div>
      <div className="wrapper-aula-items">
        <div className="aula-items-1">
          <div className="m-auto h-[60%]">
            <div className="m-auto font-[Poppins] text-lg font-semibold text-center">
              Clases en vivo / grabadas
            </div>
            <div className="m-auto text-justify w-[229px] h-[64px] lg:w-[90%]  ">
              Accede a clases en vivo todos los días; si no puedes conectarte
              revisa tus clases grabadas.
            </div>
          </div>
          <div className="m-auto bg-[#C4C4C4] w-[246px] h-[110px] mb-4 rounded-lg lg:-ml-4  lg:w-[255px]  lg:h-[80%] " />
        </div>
        <div className="aula-items-2">
          <div className="m-auto h-[60%]">
            <div className="m-auto font-[Poppins] text-lg font-semibold  text-center">
              Materiales de estudio
            </div>
            <div className=" m-auto text-justify w-[229px] h-[64px] lg:w-[90%]  ">
              Descarga diapositivas, resúmenes, separatas y libros (acorde al
              prospecto de tu Escuela) y refuerza lo aprendido en clase.
            </div>
          </div>
          <div className="m-auto bg-[#C4C4C4] w-[246px] h-[110px] mb-4 lg:-ml-4 rounded-lg lg:w-[255px] lg:h-[80%]  " />
        </div>
        <div className="aula-items-3">
          <div className="m-auto h-[60%]">
            <div className="m-auto font-[Poppins] text-lg font-semibold text-center">
              Simulacros
            </div>
            <div className="m-auto text-justify w-[246px] h-[64px] lg:w-[90%] ">
              Practica con evaluaciones semanales y mensuales para una mejor
              preparación.
            </div>
          </div>
          <div className="m-auto bg-[#C4C4C4] w-[246px] h-[110px] mb-4 rounded-lg lg:-ml-4  lg:w-[255px]  lg:h-[80%] " />
        </div>
      </div>
    </div>
  );
};

export default Index;
