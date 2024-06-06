import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ListadoIngresos = () => {
  const [ingresos, setIngresos] = useState([]);

  useEffect(() => {
    // Simulamos la carga de ingresos (en un proyecto real, se llamaría a una API o se leerían de una base de datos)
    const ingresosEjemplo = [
      { id: 1, detallePersona: 'Juan Perez', fechaIngreso: '2024-05-22', fechaSalida: '2024-05-25', montoNoche: 1200 },
      { id: 2, detallePersona: 'Maria Gomez', fechaIngreso: '2024-05-20', fechaSalida: '2024-05-23', montoNoche: 800 },
      // ... más datos de ingresos
    ];
    setIngresos(ingresosEjemplo);
  }, []);

  return (
    <div className="p-4 w-full mx-auto">
      <h2 className='ml-4 uppercase tracking-wide text-gray-700 text-s font-bold'>Listado de Ingresos</h2>
      <TableContainer component={Paper} className='mt-5'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Detalle</TableCell>
            <TableCell align="left">Ingreso</TableCell>
            <TableCell align="left">Egreso</TableCell>
            <TableCell align="left">Monto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingresos.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.detallePersona}</TableCell>
              <TableCell align="left">{row.fechaIngreso}</TableCell>
              <TableCell align="left">{row.fechaSalida}</TableCell>
              <TableCell align="left">{row.montoNoche}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default ListadoIngresos;