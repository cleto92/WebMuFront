import {
  Modal,
  ModalContent,
  ModalBody,
  NavbarItem,
  Button,
  Spinner,
} from "@nextui-org/react";
import { useState } from "react";
import { useAuth } from '../Context/AuthContext';
import PropTypes from "prop-types";

const CambiarPassword = ({ openModal, setOpenModal }) => {
  const [nuevopassword, setNuevoPassword] = useState("");
  const [confirmarpassword, setConfirmarPassword] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [loading, setLoading] = useState(false);
  const { cerrarSesion } = useAuth();
  const token = localStorage.getItem("token");

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://club5backend-89b9966266b1.herokuapp.com/api/cambiarPassword" ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nuevopassword,
            confirmarpassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un error al recuperar la cuenta");
      }

      const resultado = await response.json();
      setMensajeExito(resultado.mensaje);
      setMensajeError("");
      setTimeout(() => {
        cerrarSesion();
      }, 3000);
    } catch (error) {
      setMensajeError(mensajeError);

    }
    setLoading(false);
  };

  return (
    <div>
      <NavbarItem className="bg-transparent text-white font-bold">
        <Modal
          className="bg-transparent"
          isOpen={openModal}
          onClose={handleClose}
        >
          <ModalContent>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                  <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
                    Cambiar Password
                  </h1>
                  <div className="relative my-4">
                    <input
                      type="password"
                      className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                      placeholder=" "
                      value={nuevopassword}
                      onChange={(e) => setNuevoPassword(e.target.value)}
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                      Nuevo Password
                    </label>
                  </div>
                  <div className="relative my-4">
                    <input
                      type="password"
                      className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                      placeholder=" "
                      value={confirmarpassword}
                      onChange={(e) => setConfirmarPassword(e.target.value)}
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                      Confirmar Password
                    </label>
                  </div>
                  {loading ? (
                    <div className="flex justify-center items-center">
                      <Spinner type="points" /> {/* Muestra el spinner */}
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      flat
                      auto
                      className="w-full text-white font-bold"
                      color="success"
                    >
                      CAMBIAR PASSWORD
                    </Button>
                  )}
                  {mensajeExito && (
                    <div className="mt-4 text-center text-white">
                      {mensajeExito}
                    </div>
                  )}
                </div>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </NavbarItem>
    </div>
  );
};

export default CambiarPassword;

CambiarPassword.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
