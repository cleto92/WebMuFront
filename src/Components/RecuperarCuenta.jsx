import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Link,
  NavbarItem,
  Button,
  Spinner
} from "@nextui-org/react";

import { useState } from "react";

const RecuperarCuenta = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [IDUnico, setIDUnico] = useState("");
  const [memb___id, setMemb___id] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isLoading, setIsLoading] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const response = await fetch(
        "https://club5backend-89b9966266b1.herokuapp.com/api/recuperarCuenta", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, IDUnico, memb___id }),
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un error al recuperar la cuenta");
      }

      const result = await response.json();
      setMensaje(result.mensaje);
    } catch (error) {
      setMensaje(error.message);
    }
    setIsLoading(false)
  };

  return (
    <div>
      <NavbarItem className="bg-transparent text-white font-bold">
        <Link
          className="cursor-pointer text-lg hover:text-blue-300 transition duration-300 ease-in-out"
          onClick={onOpen}
        >
          RECUPERAR CUENTA
        </Link>
  
        <Modal
          className="bg-transparent"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                  <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
                    Recuperar Cuenta
                  </h1>
                  <div className="relative my-4">
                    <input
                      type="text"
                      className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                      placeholder=" "
                      value={memb___id}
                      onChange={(e) => setMemb___id(e.target.value)}
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                      Nombre de la cuenta
                    </label>
                  </div>
                  <div className="relative my-4">
                    <input
                      type="email"
                      className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                      placeholder=" "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                      Email
                    </label>
                  </div>
                  <div className="relative my-4">
                    <input
                      type="password"
                      className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                      placeholder=" "
                      value={IDUnico}
                      onChange={(e) => setIDUnico(e.target.value)}
                    />
                    <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                      ID Único
                    </label>
                  </div>
                  {isLoading ? (
                      <Spinner className="items-center text-center justify-center" />
                  ) : (
                    <Button type="submit" flat auto className="w-full text-white font-bold" color="success">
                    RECUPERAR CUENTA
                  </Button>
                  )}

                  {mensaje && <div className="mt-4 text-center text-white">{mensaje}</div>}
                </div>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </NavbarItem>
    </div>
  );
};

export default RecuperarCuenta;
