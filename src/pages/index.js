import Head from "next/head";
// =============== ESTILOS ===============
import "bootstrap/dist/css/bootstrap.min.css";
// =============== COMPONENTS ===============
import { MainContextProvider } from "../components/context/MainContextProvider";

import Navegacion from "../components/Navegacion/Navegacion";
import Login from "../components/Login/Login";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Página de inicio — Netflix</title>
        <meta name="description" content="Sitio Clon de Netflix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon-Netflix.ico"></link>
      </Head>    
        <Login />      
    </>
  );
}
