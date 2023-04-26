import { useState, useEffect } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() {

  const [pacientes, setPacientes] = useState([])
  

  
  const eliminarPaciente = (id) => {
    const pacienteEliminado = pacientes.filter(paciente => paciente.id != id);

    setPacientes(pacienteEliminado)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header

      />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}

        />
        <ListadoPacientes
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

    </div>
  )
}

export default App
