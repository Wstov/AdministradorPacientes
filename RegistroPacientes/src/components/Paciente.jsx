import React from 'react'

const Paciente = ({paciente, eliminarPaciente}) => {
//DISTRUCTURIN
const {nombre, propietario, email, fecha, sintomas, id} =  paciente


    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>e-mail: {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>alta: {''}
                <span className='font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>

            <div className=' flex justify-center mt-10'>
                <button
                    type='button'
                    className='py-2 px-10 bg-red-600 hover:bg-red-500 text-white font-bold
                    uppercase rounded-lg'
                    onClick={() => eliminarPaciente(id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente
