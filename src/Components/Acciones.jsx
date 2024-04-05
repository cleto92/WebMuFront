import PropTypes from "prop-types";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  Card,
  CardBody,
} from "@nextui-org/react";

const Acciones = ({ openModal, setOpenModal }) => {
  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <Modal isOpen={openModal} onClose={handleClose}>
      <ModalContent className="shadow-xl rounded-lg">
        <ModalHeader className="flex flex-col gap-1 items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-white py-3 rounded-t-lg">
          <h1 className="text-xl font-bold">ACCIONES DENTRO DEL JUEGO</h1>
        </ModalHeader>

        <ModalBody className="bg-white">
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" className="px-4 py-2">
              <Tab
                title="RESET"
                className="font-semibold text-gray-700 hover:text-blue-500"
              >
                <Card className="mt-4 shadow-md rounded-lg">
                  <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-red-700">
                        ¿Como Resetear?
                      </p>
                      <p>
                        Tipeamos dentro del juego:{" "}
                        <span className="font-bold">/reset</span>
                      </p>
                      <p>Requisitos: </p>
                      <li>
                        Nivel:{" "}
                        <span className="font-bold">
                          350
                        </span>
                      </li>
                      <li>
                        Zen:{" "}
                        <span className="font-bold">
                          25.000.000
                        </span>
                      </li>
                      <li>
                        Acumulativo:{" "}
                        <span className="font-bold">
                          NO
                        </span>
                      </li>
                      <li>
                        Inventario:{" "}
                        <span className="font-bold">Guardarlo en el Baul</span>
                      </li>
                      <div className="font-medium text-gray-700">
                        <p></p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                title="AGREGAR PUNTOS"
                className="font-semibold text-gray-700 hover:text-blue-500"
              >
                <Card className="mt-4 shadow-md rounded-lg">
                  <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-red-700">
                        Agregar Puntos en el juego
                      </p>
                      <p>Comandos: </p>
                      <li>
                        Agregar Fuerza: <span className="font-bold">/str</span>
                      </li>
                      <li>
                        Agregar Agilidad:{" "}
                        <span className="font-bold">/agi</span>
                      </li>
                      <li>
                        Agregar Vitalidad:{" "}
                        <span className="font-bold">/vit</span>
                      </li>
                      <li>
                        Agregar Energia: <span className="font-bold">/ene</span>
                      </li>
                      <div className="font-medium text-gray-700">
                        <p></p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                title="OTROS"
                className="font-semibold text-gray-700 hover:text-blue-500"
              >
                <Card className="mt-4 shadow-md rounded-lg">
                  <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold text-red-700">
                        Otros Comandos:
                      </p>
                      <li>
                        Post General: <span className="font-bold">/post</span>
                      </li>
                      <li>
                        Limpiar PK: <span className="font-bold">/pkclear</span>
                      </li>
                      <li>
                        Iniciar Guerra Clanes:{" "}
                        <span className="font-bold">/war</span>
                      </li>
                      <li>
                        Iniciar Soccer:{" "}
                        <span className="font-bold">/soccer</span>
                      </li>
                      <li>
                        Request:{" "}
                        <span className="font-bold">/request on</span>
                      </li>
                      <li>
                        Auto Attack:{" "}
                        <span className="font-bold">F8 - Seleccionar Poder</span>
                      </li>
                      <li>
                        Limpar Pick:{" "}
                        <span className="font-bold">/pickclear</span>
                      </li>
                      <li>
                        Crear Pick:{" "}
                        <span className="font-bold">/pick 1 1 - [ Zen y Joyas]</span>
                      </li>
                      <li>
                        Ejecutar Pick:{" "}
                        <span className="font-bold">/pick</span>
                      </li>
                      <div className="font-medium text-gray-700">
                        <p></p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
          </div>
        </ModalBody>
        <ModalFooter className="rounded-b-lg"></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Acciones;

Acciones.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};
