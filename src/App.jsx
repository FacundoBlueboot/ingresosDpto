import "./App.css";
import Header from "./components/header";
import IngresoForm from "./components/ingresoForm";
import ListadoIngresos from "./components/listadoIngresos";

function App() {
  return (
    <>
      <Header />
      <div className="w-full">
        <div className="flex flex-row">
          <div className="w-1/2">
            <IngresoForm />
          </div>
          <div className="w-1/2">
            <ListadoIngresos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
