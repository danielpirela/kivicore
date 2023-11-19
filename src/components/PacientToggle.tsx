import { useState } from 'react'

interface Props {
    pacientes: Paciente[]
}

interface Paciente {
        id : string
        dni: string
        phone: string
        name: string,
        status: string
}

export const PacientToggle = ({pacientes}:Props) => {

    console.log(pacientes)

    const [isActive, setIsActive] = useState(false)
    const [isView, setIsView] = useState(false)
    const handleActive = (e:any) => {
        e.preventDefault()
        setIsActive(!isActive)
    }


    return (
        <div className='flex flex-col justify-start items-start p-2'>
            <button className='bg-green-500 text-white px-4 py-2 rounded-md shadow-lg' onClick={handleActive}>
                Pacientes
            </button>
            {
                isActive &&  (
                    pacientes.map( (paciente : Paciente) => {
                        return (
                            <ul className='shadow-md flex space-x-2 p-2 rounded-md mt-2 ring-2 ring-indigo-600' key={paciente.id}>
                                <li  className='text-black text-center'>
                                    <p>{paciente.name}</p>
                                </li>
                                <li className='text-black text-center'>
                                    <p>{paciente.dni}</p>
                                </li>
                                <li className='text-black text-center'>
                                    <p>{paciente.status}</p>
                                </li>
                            </ul>
                        )
                    }
                    )
                )
            }
        </div>
    )
}
