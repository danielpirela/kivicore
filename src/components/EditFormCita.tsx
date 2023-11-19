import { useEffect, useState } from 'react'
import { Prueba } from './Prueba'
import { editAppointment, editHistory } from '@/utils/fetchData'

interface Props {
    cita: Cita
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
    name: string
    status: string
    appointment: Cita[]
    history :History[]
    }
interface History {
    id: number
    createdAt: string
    updatedAt: string
    content: string
    pacienteId: number
}

export const EditFormCita = ({cita, pacientes}:Props) => {
    const [paciente, setPaciente] = useState({})
    const [history, setHistory] = useState({})


    useEffect(() => {
        if (pacientes) {
            const pacienteTpm = pacientes.filter(paciente => Number(paciente.id) === cita.pacienteId)
            pacienteTpm.map(paciente => {
                setPaciente(paciente)
                paciente.history.map(hisrotia =>{
                    setHistory(hisrotia)
                })
            })
        }
    },[])

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const {elements} = e.currentTarget
        const historyOld = elements.namedItem('historyOld').value
        const newhistory = elements.namedItem('newhistory').value
        const finalHistory = historyOld + '\n' + newhistory
        console.log(finalHistory)

        await editAppointment(cita)
        const res = await editHistory(paciente, finalHistory)
        console.log(res)

    }

    return (
        <div className='rounded-lg'>
            <header className='bg-indigo-700 p-2 rounded-tl-lg rounded-tr-lg'>
                <h1 className='text-2xl font-bold  text-white'>Paciente</h1>
                <p className='text-xl text-slate-400'>
                    {paciente.name}
                </p>
                <p className='text-xl text-slate-400'>{paciente.dni}</p>

            </header>
            <form className='flex min-h-full min- w-full flex-col justify-center items-center'  onSubmit={handleSubmit}>
                <div className='flex justify-between space-x-2 mt-2'>
                    <Prueba historia={history}/>
                    <textarea name="newhistory" rows={6} cols={20} className='ring-2 ring-slate-700 rounded-lg
                    hover:ring-indigo-500
                    '>
                    </textarea>
                </div>
                <input type="submit" value={'enviar'} className='text-center px-4 py-2 bg-indigo-600 rounded-lg mt-2 text-white'/>
            </form>
        </div>
    )
}
