import Link from 'next/link'
import { ApptListMedico } from './ApptListMedico'

interface Props {
    medico: any
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
appointment: Cita[]
}

export const MedicoList = ({medico,pacientes}:Props) => {

    return (
        <div className='text-black'>
            <h1 className='font-semibold text-2xl ml-2 text-indigo-600'>Medico</h1>
            {
                medico && (
                    <div>
                        <section className='flex flex-col ml-2'>
                            <p className='text-lg'>{`Dni: ${medico.dni}`}</p>
                            <p className='text-lg'>{`Nombre: ${medico.name}`}</p>
                        </section>
                        <ApptListMedico citas={medico.appointment} pacientes={pacientes} />
                    </div>
                )
            }
        </div>
    )
}
