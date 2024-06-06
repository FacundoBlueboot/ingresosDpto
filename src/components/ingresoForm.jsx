import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BeatLoader from "react-spinners/BeatLoader";

const IngresoForm = () => {
  const [detallePersona, setDetallePersona] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [montoNoche, setMontoNoche] = useState("");
  const [observaciones, setObservaciones] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Simulamos el guardado de la información (en un proyecto real, se llamaría a una API o se guardaría en una base de datos)
      setLoading(true)
      setTimeout(() => {
        console.log('Datos del formulario:', {
          detallePersona,
          fechaIngreso,
          fechaSalida,
          montoNoche,
          observaciones,
          fechaActual: new Date().toLocaleDateString('es-AR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        });
        toast.success('Ingreso guardado con éxito!', {
          position: 'bottom-right',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setLoading(false)
      }, 4000)
      
    } catch (error) {
      console.error('Error al guardar el ingreso:', error);
      toast.error('Error al guardar el ingreso!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const handleReset = () => {
    setDetallePersona("");
    setFechaIngreso("");
    setFechaSalida("");
    setMontoNoche("");
  };

  return (
    <>
    <form className="mt-5 w-full max-w-max mx-auto">
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
            Descripción Reserva
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={detallePersona}
            onChange={(event) => setDetallePersona(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Fecha desde:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="date"
            value={fechaIngreso}
            onChange={(event) => setFechaIngreso(event.target.value)}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Fecha hasta:
          </label>
          <div className="relative">
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="date"
            value={fechaSalida}
            onChange={(event) => setFechaSalida(event.target.value)}
          />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Precio por noche:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            value={montoNoche}
            onChange={(event) => setMontoNoche(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2">
            Observaciones
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            value={observaciones}
            onChange={(event) => setObservaciones(event.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 mt-3">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >   
          {isLoading ? <BeatLoader color="#ffffff" /> : 'Guardar'}
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </div>
    </form>
    <ToastContainer /> 
 
    </>
  );
  
};

export default IngresoForm;
