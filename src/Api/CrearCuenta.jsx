/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button, ModalHeader, ModalFooter, Spinner } from "@nextui-org/react";
import { useFormik } from "formik";
import { useState } from "react";

const CrearCuenta = () => {
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      nombre: "",
      cuenta: "",
      apellido: "",
      email: "",
      password: "",
      confirmacionPassword: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        const respuesta = await fetch("https://club5backend-89b9966266b1.herokuapp.com/api/CrearCuenta",  {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            memb_name: values.nombre,
            apellido: values.apellido,
            memb___id: values.cuenta,
            memb__pwd: values.password,
            passwordconfirmacion: values.confirmacionPassword,
            email: values.email,
          }),
        });
        if (!respuesta.ok) {
          throw new Error("Error: Nombre de usuario en uso");
        }
        const resultado = await respuesta.json();
        console.log(
          values.nombre,
          values.apellido,
          values.cuenta,
          values.email
        );
        setMensajeExito("Cuenta creada con éxito, revisa tu Email");
        console.log(resultado.data);
        resetForm();
      } catch (error) {
        setMensajeError(error.message);
        setMensajeExito("");
      }
      setLoading(false);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <ModalHeader className="text-white bg-transparent font-bold text-center">
          {mensajeExito ? (
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {mensajeExito}
            </div>
          ) : mensajeError ? (
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              {mensajeError}
            </div>
          ) : (
            "CREAR CUENTA"
          )}
        </ModalHeader>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div>
            <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative ">
              <div className="relative">
                <input
                  required
                  name="nombre"
                  type="text"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.nombre}
                ></input>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                  Nombre
                </label>
              </div>
              <div className="relative my-4">
                <input
                  required
                  name="apellido"
                  type="text"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.apellido}
                ></input>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                  Apellido
                </label>
              </div>
              <div className="relative my-4">
                <input
                  required
                  name="cuenta"
                  type="text"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.cuenta}
                ></input>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                  Nombre de la cuenta
                </label>
              </div>
              <div className="relative my-4">
                <input
                  required
                  name="password"
                  type="password"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.password}
                ></input>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                  Contraseña
                </label>
              </div>
              <div className="relative my-4">
                <input
                  required
                  name="confirmacionPassword"
                  type="password"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.confirmacionPassword}
                ></input>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                  Repetir Contraseña
                </label>
              </div>
              <div className="relative my-4">
                <input
                  required
                  name="email"
                  type="text"
                  className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-600 focus:outline-none focus:ring-0 focus:text-white peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.email}
                ></input>
                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 left-0 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75">
                  Email
                </label>
              </div>
              {loading ? (
                <Spinner />
              ) : (
                <Button
                  type="submit"
                  flat
                  auto
                  className="w-full text-white font-bold"
                  color="success"
                >
                  CREAR CUENTA
                </Button>
              )}
            </div>
          </div>
        </div>
        <ModalFooter className="flex flex-col items-center gap-4 w-full"></ModalFooter>
      </form>
    </div>
  );
};

export default CrearCuenta;
