import { editAppointmentForPacient } from '@/utils/fetchData'
import { DateTimePicker } from '@mui/x-date-pickers'
import { useState } from 'react'
import { Cita } from '@/types'
interface Props {
    cita: Cita
}



export const EditModal =  ({cita}:Props) => {
    const [date,setDate] = useState(null)

    const handleSubmit = async(e:any) => {
        e.preventDefault()
        const {elements} = e.currentTarget
        const duration = elements.namedItem('duration').value

        if(duration && date && cita){

            const dateConverter = date.toISOString()
            const res = await editAppointmentForPacient(cita,dateConverter,duration)

            if (res.data.id) {
                window.location.reload()
            }
        }
    }

    return (
        <div className='absolute top-0 left-0 bg-none min-w-full min-h-screen flex justify-center items-center overflow-hidden z-40'>
            <div className='w-auto h-52 bg-white flex flex-col justify-center items-center rounded-lg p-4 shadow-lg ring-2 ring-indigo-700 animate-fade-down animate-delay-150 z-50'>
                <DateTimePicker label="Seleccione fecha"
                    value={date}
                    onChange={(newValue) =>  setDate(newValue)}
                />
                <form className='flex flex-col justify-center items-center space-y-2' onSubmit={handleSubmit}>
                    <input className='ring-2 ring-slate-500 rounded-lg py-4 w-60 mt-2' type="number"  name='duration'/>
                    <input className='w-24   py-2 bg-indigo-600 text-white rounded-lg text-center' type="submit" value={'Editar'}/>
                </form>
            </div>
        </div>
    )
}


export const EditModal2 =  ({cita}:Props) => {
    const [date,setDate] = useState(null)

    const handleSubmit = async(e:any) => {
        e.preventDefault()
        const {elements} = e.currentTarget
        const duration = elements.namedItem('duration').value

        if(duration && date && cita){

            const dateConverter = date.toISOString()
            const res = await editAppointmentForPacient(cita,dateConverter,duration)

            if (res.data.id) {
                window.location.reload()
            }
        }
    }

    return (
        <div className='w-1/4 h-52 bg-white flex flex-col justify-center items-center rounded-lg p-4 shadow-lg ring-2 ring-indigo-700 animate-fade-down animate-delay-150 z-50'>
            <DateTimePicker label="Seleccione fecha"
                value={date}
                onChange={(newValue) =>  setDate(newValue)}
            />
            <form className='flex flex-col justify-center items-center space-y-2' onSubmit={handleSubmit}>
                <input className='ring-2 ring-slate-500 rounded-lg py-4 w-60 mt-2' type="number"  name='duration'/>
                <input className='w-24   py-2 bg-indigo-600 text-white rounded-lg text-center' type="submit" value={'Editar'}/>
            </form>
        </div>
    )
}
