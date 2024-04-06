import { useState, useEffect } from "react";
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
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  useDisclosure,
} from "@nextui-org/react";

import DK from "../assets/dk.webm";
import DW from "../assets/mago.webm";
import ELF from "../assets/elfa.webm";
import MG from "../assets/mg.webm";

const Ranking = () => {
  const [rankingJugadores, setRankingJugadores] = useState([]);
  const [rankingClanes, setRankingClanes] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const razas = {
    16: DK,
    17: DK,
    0: DW,
    1: DW,
    32: ELF,
    33: ELF,
    48: MG,
  };



  useEffect(() => {
    const obtenerClanes = async () => {
      try {
        const respuesta = await fetch(
          "https://club5backend-89b9966266b1.herokuapp.com/api/obtenerClanes"
        );
        const resultado = await respuesta.json();
        setRankingClanes(resultado.clanes);
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClanes();
  }, []);

  useEffect(() => {
    const obtenerRankingJugadores = async () => {
      try {
        const respuesta = await fetch(
          "https://club5backend-89b9966266b1.herokuapp.com/api/obtenerUserReset"
        );
        const resultado = await respuesta.json();
        setRankingJugadores(resultado.usuariosReset);
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerRankingJugadores();
  }, []);



  return (
    <div>
      <NavbarItem className="bg-transparent text-white font-bold">
        <Link
          className="cursor-pointer text-lg hover:text-blue-300 transition duration-300 ease-in-out"
          onClick={onOpen}
        >
          RANKING
        </Link>
        <Modal
          className="animate__animated animate__fadeIn"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent className="shadow-xl rounded-lg">
            <>
              <ModalHeader className="flex flex-col bg-transparent gap-1 items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 text-white py-3 rounded-t-lg">
                <h1 className="text-xl font-bold ">RANKING</h1>
              </ModalHeader>

              <ModalBody className="bg-white">
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options" className="px-4 py-2">
                    <Tab
                      key="photos"
                      title="Ranking"
                      className="font-semibold text-gray-700 hover:text-blue-500"
                    >
                      <Card className="mt-4 shadow-md rounded-lg">
  <CardBody className="overflow-auto max-h-[500px]">
    <Table
      aria-label="Example static collection table"
      className="min-w-full divide-y divide-gray-300"
    >
      <TableHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
        <TableColumn className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
          CLASE
        </TableColumn>
        <TableColumn className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
          JUGADOR
        </TableColumn>
        <TableColumn className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
          Nivel
        </TableColumn>
      </TableHeader>
      <TableBody className="bg-white divide-y divide-gray-200">
        {rankingJugadores.map((ranking, index) => (
          <TableRow
            key={index}
            className="hover:bg-gray-50 transition duration-300 ease-in-out"
          >
            <TableCell className="px-6 py-4 whitespace-nowrap">
              {razas[ranking.Class] && (
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-16 w-16">
                    <video
                      className="h-full w-full rounded-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source
                        src={razas[ranking.Class]}
                        type="video/mp4"
                      />
                      Tu navegador no soporta videos.
                    </video>
                  </div>
                </div>
              )}
            </TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {ranking.Name}
            </TableCell>
            <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {ranking.cLevel} [{ranking.ResetCount}]
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </CardBody>
</Card>
                    </Tab>
                    
                    <Tab
                      key="clanesSlow"
                      title="Clanes"
                      className="font-semibold text-gray-700 hover:text-blue-500"
                    >
                      <Card className="mt-4 shadow-md rounded-lg">
                        <CardBody>
                          <Table
                            aria-label="Example static collection table"
                            className="min-w-full divide-y divide-gray-300"
                          >
                            <TableHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                              <TableColumn className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                CLAN
                              </TableColumn>
                              <TableColumn className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                LIDER
                              </TableColumn>
                              <TableColumn className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                                PUNTOS
                              </TableColumn>
                            </TableHeader>
                            <TableBody className="bg-white divide-y divide-gray-200">
                              {rankingClanes.map((ranking, index) => (
                                <TableRow
                                  key={index}
                                  className="hover:bg-gray-50 transition duration-300 ease-in-out"
                                >
                                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {ranking.G_Name}
                                  </TableCell>
                                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {ranking.G_Master}
                                  </TableCell>
                                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {ranking.G_Score}
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </CardBody>
                      </Card>
                    </Tab>
                    
                  </Tabs>
                </div>
              </ModalBody>
              <ModalFooter className="rounded-b-lg"></ModalFooter>
            </>
          </ModalContent>
        </Modal>
      </NavbarItem>
    </div>
  );
};

export default Ranking;
