import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link,
  Spinner
} from "@nextui-org/react";
import Acciones from "./Acciones";
import CambiarPassword from "./CambiarPassword";
import { useAuth } from "../../Context/AuthContext";


const DropDown = () => {
  const { cerrarSesion: cerrarSesionOriginal } = useAuth();
  const [cerrando, setCerrando] = useState(false);
  const [modals, setModals] = useState({
    acciones: false,
    cambiarcontraseña: false,
    cerrar: false
  });

  const cerrarSesion = () => {
    setCerrando(true);

    setTimeout(async () => {
      try {
        await cerrarSesionOriginal();
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
      setCerrando(false);
    }, 3000);
  };

  const toggleModal = (modalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: !prevModals[modalName],
    }));
  };

  return (
    <>

    {cerrando ? (
      <Spinner />
    ) : (
      <Dropdown className="bg-slate-800 text-white rounded-lg shadow-lg">
  <DropdownTrigger>
    <Link 
      className="cursor-pointer text-lg font-bold text-red-600 hover:text-red-500 transition duration-200 ease-in-out px-4 py-2 rounded-md"
      variant="rounded"
    >
      MI CUENTA
    </Link>
  </DropdownTrigger>
  <DropdownMenu className="bg-transparent mt-2 rounded-md shadow-xs">
    <DropdownItem 
      className="font-bold hover:bg-slate-700 hover:text-white transition duration-150 ease-in-out px-4 py-2" 
      onClick={() => toggleModal("acciones")} 
      key="acciones"
    >
      Comandos
    </DropdownItem>
    <DropdownItem
      className="hover:bg-slate-700 hover:text-white transition duration-150 ease-in-out px-4 py-2"
      onClick={() => toggleModal("cambiarcontraseña")}
      key="cambiarcontraseña"
    >
      Cambiar Contraseña
    </DropdownItem>
    <DropdownItem 
      className="hover:bg-slate-700 hover:text-white transition duration-150 ease-in-out px-4 py-2" 
      onClick={cerrarSesion} 
      key="cerrar"
    >
        Cerrar Sesión
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
    )}


      {modals.acciones && (
        <Acciones
  openModal={modals.acciones}
  setOpenModal={() => toggleModal("acciones")}
/>
      )}

      {modals.cambiarcontraseña && (
        <CambiarPassword
          openModal={modals.cambiarcontraseña}
          setOpenModal={() => toggleModal("cambiarcontraseña")}
        />
      )}
    </>
  );
};

export default DropDown;
