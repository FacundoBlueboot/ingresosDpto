import "./App.css";
import Header from "./components/header";
import IngresoForm from "./components/ingresoForm";
import ListadoIngresos from "./components/listadoIngresos";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-5">
        <div className="flex flex-row justify-between">
          <div className="col-md-6">
            <IngresoForm />
          </div>
          <div className="col-md-6">
            <ListadoIngresos />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
