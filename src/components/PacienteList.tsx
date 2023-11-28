import ApptList from './ApptList'
import { Cita, Paciente } from '@/types'

interface Props {
    paciente: Paciente
    citas: Cita[]
}


const PacienteList = ({paciente}:Props) => {
    return (
        <div className='text-black  w-auto p-2'>
            <h1 className='font-semibold text-2xl ml-2 text-indigo-600'>Paciente</h1>
            {
                paciente && (
                    <div>
                        <section className='flex flex-col ml-2'>
                            <p className='text-lg'>{`Dni: ${paciente.dni}`}</p>
                            <p className='text-lg'>{`Nombre: ${paciente.name}`}</p>
                        </section>
                        <ApptList citas={paciente.appointment} />
                    </div>
                )
            }
        </div>
    )
}

export default PacienteList
