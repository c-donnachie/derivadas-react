import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

export const Simulation = ({ data }) => {
  return (
    <div className="w-[40%] flex flex-col items-center gap-4">
          <h3 className="text-2xl">Resultados de la Simulación</h3>
      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Tiempo</TableColumn>
          <TableColumn>Velocidad</TableColumn>
          <TableColumn>Posicion</TableColumn>
        </TableHeader>
        <TableBody>
          {data?.map((point, index) => (
            <TableRow key={index}>
              <TableCell>{point.time.toFixed(1)} s</TableCell>
              <TableCell>{point.velocity.toFixed(2)} m/s</TableCell>
              <TableCell>{point.position.toFixed(2)} m</TableCell>
            </TableRow>
          ))}
        </TableBody>
            </Table>
    </div>
  );
};