import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Link,
  Spinner,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";

const LoginOff = () => {
  const { isOpen, onOpen, onOpenChange, onCloseLogin } = useDisclosure();
  const [error, setError] = useState("");
  const [memb___id, setMemb___id] = useState("");
  const [memb__pwd, setMemb__pwd] = useState("");
  const [tipoServer, setTipoServer] = useState("");
  const { iniciarSesion } = useAuth();
  const [cargando, setCargando] = useState(false);

  const Login = async () => {
    setCargando(true);
    try {
      const respuesta = await fetch("https://club5backend-89b9966266b1.herokuapp.com/api/Login",  {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memb___id,
          memb__pwd,
          tipoServer,
        }),
      });
      const data = await respuesta.json();
      if (data.token) {
        setTimeout(() => {
          setCargando(false);
          iniciarSesion(data.token, memb___id, tipoServer);
          onclose();
        }, 3000);
      } else {
        console.log("Login Fallido", data.mensaje);
        setError(data.mensaje);

        setCargando(false);
      }
    } catch (error) {
      console.error("Error al intentar loguear", error);
      setCargando(false);
      setError("Error al Loguear");
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <Link className="cursor-pointer text-xl text-emerald-600" onPress={onOpen}>
        INGRESAR
      </Link>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} onClose={onCloseLogin}>
        <ModalContent className="bg-transparent text-white">
          <>
            <ModalHeader className="flex flex-col gap-1">
              {error ? (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {error}
                </div>
              ) : (
                ""
              )}
            </ModalHeader>
            {cargando ? (
              <div>
                <p className="flex items-center justify-center mb-4">
                  Ingresando....
                </p>
                <Spinner className="flex items-center justify-center" />
              </div>
            ) : (
              <ModalBody>
                <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
                  <h1 className="text-4xl font-bold text-center">Ingresar</h1>
                  <form action="">
                    <div className="relative">
                      <input
                        type="text"
                        className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                        placeholder=" "
                        value={memb___id}
                        onChange={(e) => setMemb___id(e.target.value)}
                        required
                      ></input>
                      <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                        Usuario
                      </label>
                    </div>
                    <div className="relative my-4">
                      <input
                        type="password"
                        value={memb__pwd}
                        onChange={(e) => setMemb__pwd(e.target.value)}
                        className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                        placeholder=" "
                      ></input>
                      <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                        Contraseña
                      </label>
                    </div>
                    <div className="relative my-4">
                      <select
                        className="block w-72 py-2.5 px-2 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                        value={tipoServer}
                        onChange={(e) => setTipoServer(e.target.value)}
                      >
                        <option value="" disabled selected>
                          Seleccionar Servidor
                        </option>
                        <option className="text-black" value="Slow">
                          SLOW
                        </option>
                      </select>
                      <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                        Selecciona una opción
                      </label>
                    </div>
                    <button
                      onClick={Login}
                      className="w-full mb-4 text-[18px] rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300"
                    >
                      Ingresar
                    </button>
                  </form>
                </div>
              </ModalBody>
            )}
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginOff;
