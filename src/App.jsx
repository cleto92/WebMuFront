/* eslint-disable react-hooks/exhaustive-deps */

import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import MuOnline2 from "./assets/MuVideo.mp4";
import "animate.css";
import LoginOff from "./Components/LoginOff";
import LoginOn from "./Components/LoginOn";
import CrearCuenta from "./Api/CrearCuenta";
import { useAuth } from "../Context/AuthContext";
import Ranking from "./Components/Ranking";
import Informacion from "./Components/Informacion";
import Descargas from "./Components/Descargas";
import RecuperarCuenta from "./Components/RecuperarCuenta";
import { useState, useEffect } from "react";

import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Link,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

const App = () => {
  const { usuarioActual, cerrarSesion } = useAuth();

  const [cantidadUsuariosOnlineSlow, setCantidadUsuariosOnlineSlow] =
    useState(0);
  const [temporizadorInactividad, setTemporizadorInactividad] = useState(null);

  const reiniciarTemporizador = () => {
    if (temporizadorInactividad) clearTimeout(temporizadorInactividad);

    setTemporizadorInactividad(
      setTimeout(() => {
        cerrarSesion();
      }, 60000)
    );
  };
  useEffect(() => {
    window.addEventListener("mousemove", reiniciarTemporizador);
    window.addEventListener("keydown", reiniciarTemporizador);
    window.addEventListener("scroll", reiniciarTemporizador);
    window.addEventListener("click", reiniciarTemporizador);
    reiniciarTemporizador();
    return () => {
      window.removeEventListener("mousemove", reiniciarTemporizador);
      window.removeEventListener("keydown", reiniciarTemporizador);
      window.removeEventListener("scroll", reiniciarTemporizador);
      window.removeEventListener("click", reiniciarTemporizador);

      if (temporizadorInactividad) clearTimeout(temporizadorInactividad);
    };
  }, []);

  useEffect(() => {
    const obtenerUsuariosSlow = async () => {
      try {
        const respuesta = await fetch(
          "https://club5backend-89b9966266b1.herokuapp.com/api/usuariosOnlineSlow"
        );
        const resultado = await respuesta.json();
        setCantidadUsuariosOnlineSlow(resultado.cantidad);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    };
    obtenerUsuariosSlow();
  }, []);

  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onOpenChange: onOpenChangeRegister,
  } = useDisclosure();

  return (
    <div
      className="relative bg-white min-h-screen"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={MuOnline2} type="video/mp4" />
      </video>

      <Navbar
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <Ranking />
          <Informacion />
          <Descargas />
          <RecuperarCuenta />
          <NavbarItem className="bg-transparent text-white font-bold">
            <Link
              className="cursor-pointer text-lg hover:text-blue-300 transition duration-300 ease-in-out"
              href="http://club5foro.great-site.net/index.php"
            >
              FORO
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="justify-between">
          <NavbarItem className="hidden lg:flex font-bold px-10 ">
            {usuarioActual ? <LoginOn /> : <LoginOff />}
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div className="pt-10 ">
        {usuarioActual ? (
          <section className="flex flex-col md:flex-row justify-between items-start min-h-screen bg-black text-white px-10 py-1">
            <section className="z-10">
              <a href="/" className="flex">
                <span className="text-3xl font-bold uppercase tracking-wider">
                  Club5{" "}
                  <span className="text-2xl font-semibold">
                    Mu Online Server
                  </span>
                </span>
              </a>
            </section>
            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
            <div
              className="z-20 flex flex-col justify-between items-start gap-4 p-4"
              style={{ marginTop: "10rem", marginLeft: "-85rem" }}
            >
              <Modal
                isOpen={isOpenRegister}
                onOpenChange={onOpenChangeRegister}
                className="flex items-center justify-center"
              >
                <ModalContent className="backdrop-filter backdrop-blur-xl bg-black/30 p-8 rounded-lg shadow-lg shadow-[#00000050] flex flex-col items-center gap-6">
                  <CrearCuenta onOpenChangeRegister={onOpenChangeRegister} />
                </ModalContent>
              </Modal>
            </div>
            <div className="z-50 flex flex-col gap-10 p-4 mt-44">
              <FaFacebook className="w-auto h-6 text-white/50 hover:text-white hover:scale-150 transition" />
              <FaInstagram className="w-auto h-6 text-white/50 hover:text-white hover:scale-150 transition" />
              <FaSquareXTwitter className="w-auto h-6 text-white/50 hover:text-white hover:scale-150 transition" />
            </div>
          </section>
        ) : (
          <section className="flex flex-col md:flex-row justify-between items-start min-h-screen bg-black text-white px-10 py-1">
            <header className="z-10">
              <a href="/" className="flex">
                <span className="text-3xl font-bold uppercase tracking-wider">
                  Club5{" "}
                  <span className="text-2xl font-semibold">
                    Mu Online Server
                  </span>
                </span>
              </a>
            </header>

            <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

            <div
              className="z-20 flex flex-col justify-between items-start gap-4 p-4"
              style={{ marginTop: "10rem", marginLeft: "-85rem" }}
            >
              <h1 className="text-5xl text-white font-light">
                <span className="font-semibold text-4xl uppercase">
                  Crear Cuenta
                </span>
              </h1>
              <p className="leading-relaxed mt-4 text-gray-200 hidden md:block">
                Regístrate gratis y empieza a jugar!
              </p>
              <Link
                onClick={onOpenRegister}
                className="cursor-pointer bg-white text-black border-0 py-2 px-8 my-4 text-md font-semibold tracking-widest uppercase hover:bg-gray-300 hover:scale-110 transition"
              >
                Crear Cuenta
              </Link>

              <div>
                Usuarios Online:{" "}
                <span className="font-bold">{cantidadUsuariosOnlineSlow}</span>
              </div>

              <Modal
                isOpen={isOpenRegister}
                onOpenChange={onOpenChangeRegister}
                className="flex items-center justify-center"
              >
                <ModalContent className="backdrop-filter backdrop-blur-xl bg-black/30 p-8 rounded-lg shadow-lg shadow-[#00000050] flex flex-col items-center gap-6">
                  <CrearCuenta onOpenChangeRegister={onOpenChangeRegister} />
                </ModalContent>
              </Modal>
            </div>
            <div className="z-50 flex flex-col gap-10 p-4 mt-44">
              <FaFacebook className="w-auto h-6 text-white/50 hover:text-white hover:scale-150 transition" />
              <FaInstagram className="w-auto h-6 text-white/50 hover:text-white hover:scale-150 transition" />
              <FaSquareXTwitter className="w-auto h-6 text-white/50 hover:text-white hover:scale-150 transition" />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default App;
