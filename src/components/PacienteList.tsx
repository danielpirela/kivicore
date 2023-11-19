import ApptList from './ApptList'

interface Props {
    paciente: Paciente
    citas: Cita[]
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

const PacienteList = ({paciente}:Props) => {
    return (
        <div className='text-black  w-aut p-2'>
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
