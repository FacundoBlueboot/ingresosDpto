const Header =  () => {
    return (
        <header className="bg-gray-800 text-white p-4 w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Gestión de Alquileres Temporarios</h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#" className="btn btn-primary">Ingresos</a>
              </li>
              <li>
                <a href="#" className="btn btn-secondary">Gastos</a>
              </li>
              <li>
                <a href="#" className="btn btn-tertiary">Informes</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header