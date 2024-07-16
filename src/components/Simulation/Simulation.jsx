import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export const Simulation = ({ data }) => {
  return (
    <div className="md:w-[95%] flex flex-col items-center gap-4 lg:w-[25%]">
      <h3 className="text-2xl">Resultados de la Simulación</h3>
      <Table isStriped aria-label="Example static collection table">
        <TableHeader className="sticky top-0 bg-white z-10">
          <TableColumn>Tiempo</TableColumn>
          <TableColumn>Aceleración</TableColumn>
          <TableColumn>Velocidad</TableColumn>
          <TableColumn>Posición</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.map((point, index) => (
            <TableRow key={index}>
              <TableCell>{point.time.toFixed(1)} s</TableCell>
              <TableCell>{point.acceleration.toFixed(2)} m/s²</TableCell>
              <TableCell>{point.velocity.toFixed(2)} m/s</TableCell>
              <TableCell>{point.position.toFixed(2)} m</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
