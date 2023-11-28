import { createAppointment, getMedico } from '@/utils/fetchData'
import { useEffect, useState } from 'react'
import { SelectMedico } from './SelectMedico'
import { DateTimePicker } from '@mui/x-date-pickers'
import { useAppSelector } from '@/app/redux/hooks'


export const CreateCita = () => {

    const email = useAppSelector(state => state.pacienteId.email)

    console.log(email)

    const [date,setDate] = useState(null)
    const [medicos, setMedicos] = useState([])
    const pacienteId = useAppSelector(state => state.pacienteId.id)

    useEffect(() =>{
        const setState = async () => {
            const res = await getMedico()
            if (res.data) {
                setMedicos(res.data)
            }
        }
        setState()
    },[])

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const {elements} = e.currentTarget
        const duration = elements.namedItem('duration').value
        const medico = elements.namedItem('medico').value

        if (duration && date && medico && pacienteId) {

            const dateConverter = date.toISOString()
            const res = await createAppointment(duration, dateConverter, medico, pacienteId,email)
            if (res.data) {
                window.location.reload()
            }
        }
    }

    return (
        <div className='flex flex-col justify-center items-center bg-white p-4 rounded-lg ring-2 ring-indigo-700 shadow-xl z-50  animate-fade-left delay-150'>
            <DateTimePicker label="Seleccione la fecha"
                value={date}
                onChange={(newValue) =>  setDate(newValue)}
            />
            <form className='flex flex-col justify-center items-center space-y-4' onSubmit={handleSubmit}>
                <input className='ring-2 ring-slate-500 rounded-lg py-4 w-60 mt-2' type="number" name='duration'/>
                <SelectMedico medicos={medicos}/>
                <input className='bg-indigo-600 text-center text-white w-32 py-2 rounded-lg' type="submit" value={'Crear'}/>
            </form>
        </div>
    )
}
