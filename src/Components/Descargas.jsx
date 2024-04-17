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

const Descargas = () => {
  const {
    isOpen: isOpenDescargas,
    onOpen: onOpenDescargas,
    onOpenChange: onOpenChangeDescargas,
  } = useDisclosure();

  return (
    <div>
      <NavbarItem className="bg-transparent text-white font-bold">
        <Link
          className="cursor-pointer text-lg hover:text-blue-300 transition duration-300 ease-in-out"
          onClick={onOpenDescargas}
        >
          DESCARGAS
        </Link>
        <Modal
          className="animate__animated animate__fadeIn"
          isOpen={isOpenDescargas}
          onOpenChange={onOpenChangeDescargas}
        >
          <ModalContent className="shadow-xl rounded-lg">
            <ModalHeader className="flex flex-col gap-1 items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-white py-3 rounded-t-lg">
              <h1 className="text-xl font-bold">DESCARGAS</h1>
            </ModalHeader>

            <ModalBody className="bg-white p-4">
              <Tabs aria-label="Options">
                <Tab
                  title="MEDIAFIRE"
                  className="font-semibold text-gray-700 hover:text-blue-500"
                >
                  <Card className="mt-4 shadow-md rounded-lg">
                    <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold">
                          Descargar:{" "}
                          <Link
                            href="https://www.mediafire.com/file/k58m40ark4l26w8/Club5_V2.exe/file"
                            className="text-blue-500 hover:underline"
                          >
                            MEDIAFIRE
                          </Link>
                        </p>
                        <div className="font-medium text-gray-700">
                          <p>Requisitos:</p>
                          <ul className="list-disc pl-5">
                            <li>Procesador: 2 Núcleos o más AMD/INTEL</li>
                            <li>RAM: 1 GB</li>
                            <li>Placa de Video 256 MB</li>
                            <li>Conexión a internet 10 MB o más</li>
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab
                  title="MEGA"
                  className="font-semibold text-gray-700 hover:text-blue-500"
                >
                  <Card className="mt-4 shadow-md rounded-lg">
                    <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold">
                          Descargar:{" "}
                          <Link
                            href="https://mega.nz/file/XtZGEbRb#CURJZhynigQCX4neAd1punyc7Z1nIEH9u2Lg-UzyezU"
                            className="text-blue-500 hover:underline"
                          >
                            MEGA
                          </Link>
                        </p>
                        <p>Nombre: <span className="font-bold">CLUB5_V2</span></p>
                        <div className="font-medium text-gray-700">
                          <p>Requisitos:</p>
                          <ul className="list-disc pl-5">
                            <li>Procesador: 2 Núcleos o más AMD/INTEL</li>
                            <li>RAM: 1 GB</li>
                            <li>Placa de Video 256 MB</li>
                            <li>Conexión a internet 10 MB o más</li>
                          </ul>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
                <Tab
                  title="PARCHE"
                  className="font-semibold text-gray-700 hover:text-blue-500"
                >
                  <Card className="mt-4 shadow-md rounded-lg">
                    <CardBody className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="flex flex-col gap-2">
                        <p className="font-semibold">
                          Descargar:{" "}
                          <Link
                            href="https://www.mediafire.com/file/piii346xlxnyx65/Parche_V2.rar/file"
                            className="text-blue-500 hover:underline"
                          >
                            PARCHE_V2
                          </Link>
                        </p>
                        <p>Si tenes el antiguo cliente, debes descargar el Parche de forma obligatoria. El actual Cliente ya tiene el parche incluido, sin embargo recomendamos descargar el Cliente CLUB5_V2</p>
                        <div className="font-medium text-gray-700"></div>
                      </div>
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </ModalBody>
            <ModalFooter className="rounded-b-lg"></ModalFooter>
          </ModalContent>
        </Modal>
      </NavbarItem>
    </div>
  );
};

export default Descargas;
