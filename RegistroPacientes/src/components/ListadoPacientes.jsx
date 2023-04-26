import Paciente from "./Paciente"

Paciente

const ListadoPacientes = ({pacientes, eliminarPaciente}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
            <h2 className='font-black text-3xl text-center'>Se guimiento de Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center '>
                Administra tus {''}
                <span className='text-emerald-600 font-bold '>Pacientes y Citas</span>
            </p>

            {pacientes.map((paciente) => {
                return (
                    <Paciente
                        key={paciente.id}
                        paciente={paciente}
                        eliminarPaciente={eliminarPaciente}
                    />
                )
            })}

            
            

        </div>
    )
}

export default ListadoPacientes
