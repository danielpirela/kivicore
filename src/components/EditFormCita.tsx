import { useEffect, useState } from 'react'
import { Prueba } from './Prueba'
import { editAppointment, editHistory } from '@/utils/fetchData'
import { formateDate } from '@/utils/formatTime'
import { Cita, Paciente } from '@/types'

interface Props {
    cita: Cita
    pacientes: Paciente[]
}

export const EditFormCita = ({ cita, pacientes }: Props) => {
    const [paciente, setPaciente] = useState({})
    const [history, setHistory] = useState({})

    useEffect(() => {
        if (pacientes) {
            const pacienteTpm = pacientes.filter(
                paciente => Number(paciente.id) === cita.pacienteId,
            )
            pacienteTpm.map(paciente => {
                if (paciente) {
                    setPaciente(paciente)
                    paciente.history.map(hisrotia => {
                        setHistory(hisrotia)
                    })
                }
            })
        }
    }, [])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const date: any = Date.now()

        const dateNow = formateDate(date)
        console.log(date)

        const { elements } = e.currentTarget
        const newhistory = elements.namedItem('newhistory').value
        const finalHistory = +'\n' + ' - ' + dateNow + ': ' + newhistory + ' '

        console.log(finalHistory)

        await editAppointment(cita)
        const res = await editHistory(paciente, finalHistory)
        console.log(res)
    }

    return (
        <div className='rounded-lg'>
            <header className='bg-indigo-700 p-2 rounded-tl-lg rounded-tr-lg'>
                <h1 className='text-2xl font-bold  text-white'>Paciente</h1>
                <p className='text-xl text-slate-400'>{paciente.name}</p>
                <p className='text-xl text-slate-400'>{paciente.dni}</p>
            </header>
            <form
                className='flex min-h-full min- w-full flex-col justify-center items-center p-2'
                onSubmit={handleSubmit}
            >
                <div className='flex justify-between space-x-2 mt-2'>
                    <Prueba historia={history} />
                    <textarea
                        name='newhistory'
                        rows={6}
                        cols={20}
                        className='ring-2 ring-slate-700 rounded-lg
                    hover:ring-indigo-500
                    flex-1
                    '
                    ></textarea>
                </div>
                <input
                    type='submit'
                    value={'enviar'}
                    className='text-center px-4 py-2 bg-indigo-600 rounded-lg mt-2 text-white'
                />
            </form>
        </div>
    )
}
