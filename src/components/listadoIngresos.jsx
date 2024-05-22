import { useState, useEffect } from 'react';

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
    <div className="bg-white p-4 ">
      <h2>Listado de Ingresos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Detalle Persona</th>
            <th>Fecha Ingreso</th>
            <th>Fecha Salida</th>
            <th>Monto por Noche</th>
          </tr>
        </thead>
        <tbody>
          {ingresos.map((ingreso) => (
            <tr key={ingreso.id}>
              <td>{ingreso.id}</td>
              <td>{ingreso.detallePersona}</td>
              <td>{ingreso.fechaIngreso}</td>
              <td>{ingreso.fechaSalida}</td>
              <td>{ingreso.montoNoche}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoIngresos;