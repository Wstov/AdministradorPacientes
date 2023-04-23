import { useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [{pacientes,setPasientes}] = useState([])


  return (
    <div className="container mx-auto mt-20">
      <Header
        setPasientes={setPasientes}
        pacientes={pacientes}
      />
      <div className="mt-12 md:flex">
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App
