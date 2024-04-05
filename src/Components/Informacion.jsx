import {
  NavbarItem,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tabs,
  Tab,
  Card,
  CardBody,
  useDisclosure,
} from "@nextui-org/react";


const Informacion = () => {


  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onOpenChange: onOpenChangeInfo,
  } = useDisclosure();

  return (
    <div>
      <NavbarItem className="bg-transparent text-white font-bold">
        <Link
          className="cursor-pointer text-lg hover:text-blue-300 transition duration-300 ease-in-out"
          onClick={onOpenInfo}
        >
          INFORMACIÓN
        </Link>
        <Modal
          className="animate__animated animate__fadeIn"
          isOpen={isOpenInfo}
          onOpenChange={onOpenChangeInfo}
        >
          <ModalContent className="shadow-xl rounded-lg">
            <ModalHeader className="flex flex-col gap-1 items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-white py-3 rounded-t-lg">
              <h1 className="text-xl font-bold">INFORMACIÓN</h1>
            </ModalHeader>

            <ModalBody className="bg-white">
              <div className="flex w-full flex-col">
                <Tabs aria-label="Options" className="px-4 py-2">
                  <Tab
                    title="Informacion"
                    className="font-semibold text-gray-700 hover:text-blue-500"
                  >
                    <Card className="mt-4 shadow-md rounded-lg">
                      <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold text-red-700">
                            Informacion del Servidor:
                          </p>
                          <div className="font-medium text-gray-700">
                            <ul className="list-disc pl-5">
                              <li>
                                Version:{" "}
                                <span className="font-bold">97d Clasica</span>
                              </li>
                              <li>
                                Experiencia:{" "}
                                <span className="font-bold">12x</span>
                              </li>
                              <li>
                                Drop: <span className="font-bold">40%</span>
                              </li>
                              <li>
                                Balanceo: <span className="font-bold">Si</span>
                              </li>
                              <li>
                                Reset:{" "}
                                <span className="font-bold">Nivel 350</span>
                              </li>

                            </ul>
                          </div>
                        </div>
                        
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab
                    title="Mas Info!"
                    className="font-semibold text-gray-700 hover:text-blue-500"
                  >
                    <Card className="mt-4 shadow-md rounded-lg">
                      <CardBody>
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold text-red-700">
                            Mas informacion del Servidor:
                          </p>
                          <div className="font-medium text-gray-700">
                            <ul className="list-disc pl-5">
                              <li>
                                Bless Bug: <span className="font-bold">NO</span>
                              </li>
                              <li>
                                Borra Stat:{" "}
                                <span className="font-bold">NO</span>
                              </li>
                              <li>
                                Costo del Reset{" "}
                                <span className="font-bold">25 Millones</span>
                              </li>
                              <li>
                                Costo Acumulativo:{" "}
                                <span className="font-bold">NO</span>
                              </li>
                              <li>
                                Borra Inventario:{" "}
                                <span className="font-bold">NO</span>
                              </li>
                              <li>
                                Puntos Adicionales:{" "}
                                <span className="font-bold">NO</span>
                              </li>
                              <li>
                                Stats Maximos{" "}
                                <span className="font-bold">32767</span>
                              </li>
                              <li>
                                Nivel para ingresar a Stadium:{" "}
                                <span className="font-bold">255</span>
                              </li>
                            </ul>
                          </div>
                          <div className="flex flex-col gap-2">
                            <p className="text-center font-semibold text-red-700 py-4">
                              Visita el{" "}
                              <Link href="http://club5foro.great-site.net/index.php">
                                Foro
                              </Link>{" "}
                              para mas Informacion!
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab
                    title="Eventos"
                    className="font-semibold text-gray-700 hover:text-blue-500"
                  >
                    <Card className="mt-4 shadow-md rounded-lg">
                      <CardBody>
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold text-red-700">Eventos:</p>
                          <div className="font-medium text-gray-700">
                            <ul className="list-disc pl-5">
                              <li>
                                Blood Castle:{" "}
                                <span className="font-bold">Si</span>
                              </li>
                              <li>
                                Premios Blood Castle:{" "}
                                <span className="font-bold">Cajas Kundun</span>
                              </li>
                              <li>
                                Devil Square:{" "}
                                <span className="font-bold">Si</span>
                              </li>
                              <li>
                                Premios Devil Square:{" "}
                                <span className="font-bold">
                                  Bonus de Experiencia
                                </span>
                              </li>
                              <li>
                                Dorados: <span className="font-bold">Si</span>
                              </li>
                              <li>
                                Golden Archer:{" "}
                                <span className="font-bold">Si</span>
                              </li>
                              <li>
                                Premios Golden Archer:{" "}
                                <span className="font-bold">Joyas</span>
                              </li>
                              <li>
                                Happy Hour:{" "}
                                <span className="font-bold">
                                  Todos los sabados!
                                </span>
                              </li>
                            </ul>
                            <p className="text-center font-semibold text-red-700 py-4">
                              Visita el{" "}
                              <Link href="http://club5foro.great-site.net/index.php">
                                Foro
                              </Link>{" "}
                              para mas Informacion! Eventos para ambos
                              servidores
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Tab>
                  <Tab
                    title="Spots"
                    className="font-semibold text-gray-700 hover:text-blue-500"
                  >
                    <Card className="mt-4 shadow-md rounded-lg">
                      <CardBody>
                        <div className="flex flex-col gap-2">
                          <p className="font-semibold text-red-700">Spots:</p>
                          <div className="font-medium text-gray-700">
                            <ul className="list-disc pl-5">
                              <li>Noria </li>
                              <li>Lorencia </li>
                              <li>Devias </li>
                              <li>Dungeon </li>
                              <li>Dungeon 3 </li>
                              <li>Atlans </li>
                              <li>Losttower </li>
                              <li>Losttower 3 </li>
                              <li>Losttower7 </li>
                              <li>Atlans3 </li>
                              <li>Tarkan </li>
                              <li>Tarkan 2 </li>
                              <li>Stadium </li>
                              <li>Exilio Proximamente! </li>
                              <li>Icarus </li>
                            </ul>
                            <p className="text-center font-semibold text-red-700 py-4">
                              Visita el{" "}
                              <Link href="http://club5foro.great-site.net/index.php">
                                Foro
                              </Link>{" "}
                              para mas Informacion!
                            </p>
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
      </NavbarItem>
    </div>
  );
};

export default Informacion;
