import React from "react";
import { Zoom} from "react-slideshow-image"

const url = "https://percycordova.github.io/Guide/Assets/carrusel-lg.png";

const slideImages = [url, url, url];

const zoomInProperties = {
  indicators: true,
  scale: 1.4,
};

const Index = () => {
  return (
    <div className="wrapper-acerca">
      <div className="w-auto h-auto lg:h-[90%] flex flex-col justify-around  ">
        <div className="acerca-tittle">Acerca de GUIDE</div>
        <div className="acerca-description">
          Somos una academia de preparación exclusiva para jóvenes que están
          próximos a postular a una escuela de Oficiales, Sub Oficiales, Beca 18
          y el IESTFFAA. Contamos con la mejor plana de docentes e instructores
          con amplia experiencia en el uso de herramientas digitales, además de
          tener un moderno método de enseñanza que garantizarán resultados
          positivos.
        </div>
      </div>
      <div className="acerca-slider">
        {/* <div className="justify-center align-middle "> */}
          <Zoom className="justify-center align-middle" {...zoomInProperties}>
            {slideImages.map((each, index) => (
              <div key={index} style={{ width: "100%" }}>
                <img style={{ objectFit: "cover", width: "100%" }} src={each} />
              </div>
            ))}
          </Zoom>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Index;
