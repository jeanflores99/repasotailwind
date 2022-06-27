import type { NextPage } from "next";
import Navbar from "@modules/navbar";
import Banner from "@modules/banner";
import Acerca from "@modules/acerca";
import Nostros from "@modules/nosotros";
import Dirigimos from "@modules/dirigimos";
import Descubre from "@modules/descubre";
import AulaVirtual from "@modules/aula";
import Ingresantes from "@modules/ingresante";
import Footer from "@modules/footer";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Acerca />
      <Nostros />
      <Dirigimos />
      <Descubre />
      <AulaVirtual />
      <Ingresantes />
      <Footer />
    </>
  );
};

export default Home;
