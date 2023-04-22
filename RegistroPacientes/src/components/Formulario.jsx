import { useState } from "react"

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fechas, setFechas] = useState('')
    const [sintomas, seSintomas] = useState('')

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-3xl text-center'>Desde pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Añade Pacientes y {''}
                <span className="text-emerald-600 font-bold ">Administralos</span>
            </p>

            <form action="" className="bg-white shadow-md  rounded-lg py-10 px-5 mb-10">

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="nombre"
                    >Nombre de la Mascota</label>
                    <input
                        id="nombre"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
                    />
                </div>

                <div className="mb-5">
                    <label className="block text-gray uppercase font-bold" htmlFor="alta"
                    >Alta</label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
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
