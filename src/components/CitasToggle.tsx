import { redirect } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { editAppointment, editHistory } from '@/utils/fetchData'

interface Props {
    citas: Cita[]
    pacientes: Paciente[]
}

interface Cita {
        id : string
        day: string
        duration: number
        medicoId: number
        pacienteId: number
        time: Date
        type: string
        status: string
}

interface Paciente {
    id : string
    dni: string
    phone: string
    name: string,
    status: string
}


export const CitasToggle = ({citas , pacientes }:Props) => {

    const [isActive, setIsActive] = useState(false)
    const [isClose, setIsClose] = useState(false)
    const [citaIndividual, setCitaIndividual] = useState({})
    const [pacienteIndividual, setPacienteIndividual] = useState({})
    const [pacienteHistoria,setPacienteHistoria] = useState('')

    const handleActive = (e:any) => {
        e.preventDefault()
        setIsActive(!isActive)
    }

    const handleCheck = async (e:React.MouseEvent<HTMLElement>, index: number) => {

        setCitaIndividual(citas[index])
        setPacienteIndividual(pacientes[index])
        setPacienteHistoria(pacientes[index].history[0].content)
        console.log(pacienteIndividual)

        setIsClose(!isClose)
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        const {elements} = e.currentTarget
        const his = elements.namedItem('his').value

        await editHistory(pacienteIndividual,his)
        await editAppointment(citaIndividual)
    }

    return (
        <div className='flex flex-col justify-start items-start p-2'>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-md shadow-lg w-auto h-auto' onClick={handleActive}>
                Citas
            </button>
            {
                isClose && (
                    <div className='bg-slate-50 text-black w-px-600'>
                        <form action="" onSubmit={handleSubmit}>
                            <p>{pacienteIndividual.name}</p>
                            <p>{citaIndividual.id}</p>
                            <textarea rows='4' value={pacienteHistoria}/>
                            <textarea rows="6" name='his'/>
                            <input type='submit' value={'boton'}/>
                        </form>
                    </div>
                )
            }
            {
                isActive && !isClose &&(
                    citas.map( (cita : Cita, index) => {
                        return (
                            <ul className='shadow-md flex space-x-2 p-2 rounded-md mt-2 ring-2 ring-indigo-600' key={cita.id}>
                                <li  className='text-black text-center'>
                                    <p>{cita.day}</p>
                                </li>
                                <li className='text-black text-center'>
                                    <p>{`${cita.duration} mins`}</p>
                                </li>
                                <li className='text-black text-center'>
                                    <p>{String(cita.time)}</p>
                                </li>
                                <li className='text-black text-center'>
                                    <p>{cita.type}</p>
                                </li>
                                <li className='text-black text-center'>
                                    <button className={`rounded-xl px-2 text-white
                                    ${cita.status !== 'Programada' ? 'bg-green-500'
                                : 'bg-orange-500'}`}
                                    >
                                        {cita.status}
                                    </button>
                                </li>
                                <li>
                                    <button className={'rounded-xl px-2 text-white bg-blue-500'}
                                        onClick={
                                            (e) =>{
                                                handleCheck(e,index)
                                            }
                                        }
                                    >
                                        a
                                    </button>
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
