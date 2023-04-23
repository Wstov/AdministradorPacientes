import { useState } from "react"

const Formulario = ({ pacientes, setPacientes }) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')



    const handleSubmit = (e) => {
        e.preventDefault();

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas

        }

        setPacientes([...pacientes, objetoPaciente])

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }



    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 ">
            <h2 className='font-black text-3xl text-center'>Desde pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Añade Pacientes y {''}
                <span className="text-emerald-600 font-bold ">Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                action=""
                className="bg-white shadow-md  rounded-lg py-10 px-5 mb-10">

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="nombre"
                    >Nombre de la Mascota</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="propietario"
                    >Nombre del Propietario</label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="email"
                    >e-mali</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="e-mail Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="alta"
                    >Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="sintomas"
                    >Síntomas</label>
                    <textarea
                        name=""
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Sintomas"
                        value={sintomas}
                        onChange={(e) => seSintomas(e.target.value)}
                    ></textarea>

                </div>

                <input
                    type="submit"
                    className="bg-emerald-600 w-full p-3 text-white uppercase font-bold
                         hover:bg-emerald-400 cursor-pointer transition-all"
                    value="Agregar Paciente"
                />



            </form>
        </div>
    )
}

export default Formulario
