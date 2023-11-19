import { redirect } from 'next/navigation'
import { useState } from 'react'
import { EditModal } from './EditModal'
import { deleteCita } from '@/utils/fetchData'
import { ComponentModal } from './ComponentModal'
import { CreateCita } from './CreateCita'
import { PacienteDatos } from './PacienteDatos'
import { ModalEditMedicoCita } from './ModalEditMedicoCita'
import { EditFormCita } from './EditFormCita'
import { IconCheck, IconClose, IconTrash } from './Icons'

interface Props {
    pacientes: Paciente[]
    citas: Cita[]
}

interface Paciente {
    id : string
    dni: string
    phone: string
    name: string,
    status: string
    appointment: Cita[]
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


export const ApptListMedico = ({citas, pacientes}:Props) => {
    const [isEditing, setIsEditing] = useState(false)
    const [citaIndividual,setCitaIndividual] = useState({})
    const [deleteView, setDeleteView] = useState(false)


    const handleEdit = (e:React.MouseEvent<HTMLElement> , index: number) =>{
        e.preventDefault()
        setCitaIndividual(citas[index])
        setIsEditing(!isEditing)
    }

    const handleDelete = (e:React.MouseEvent<HTMLElement> , index: number) =>{
        e.preventDefault()
        setCitaIndividual(citas[index])
        setDeleteView(!deleteView)
    }
    return (
        <div>

            {   isEditing &&(
                <>
                    <button className='absolute right-0 top-0 mr-4 mt-20 text-indigo-600 z-20 text-2xl bg-indigo-700 p-1 rounded-lg ' onClick={() => {setIsEditing(!isEditing)}}>
                        <IconClose w={24} h={24}/>
                    </button>
                    <ModalEditMedicoCita>
                        <EditFormCita cita={citaIndividual} pacientes={pacientes}/>
                    </ModalEditMedicoCita>
                </>

            )
            }
            {
                deleteView && <div className='fixed top-0 left-0 overflow-hidden bg-none opacity-95 min-h-screen min-w-full flex justify-center items-start'>
                    <div className='bg-slate-100 rounded-lg p-3 ring-2 ring-red-600 mt-4'>
                        <h1 className=' text-lg'>Estas seguro que quieres borrarla?</h1>
                        <div className='space-x-1 justify-center items-center flex py-2'>

                            <button onClick={async () =>{
                                await deleteCita(citaIndividual.id)
                                setDeleteView(!deleteView)
                                alert('Cita eliminada')
                            //window.location.reload()
                            }
                            }
                            className='px-4 py-2 bg-indigo-600 text-center rounded-lg w-32 text-white'
                            >
                            Borrar
                            </button>
                            <button onClick={() => {setDeleteView(!deleteView)}} className='px-4 py-2 bg-red-600 text-center text-white rounded-lg w-32'>Cancelar</button>
                        </div>
                    </div>
                </div>
            }
            {
                citas && (
                    citas.map((cita , index)=> {
                        return (
                            <>
                                <ul className='shadow-md flex space-x-2 p-2 rounded-md m-2 ring-2 ring-indigo-600 justify-start items-center w-auto' key={cita.id}
                                >
                                    <li  className='text-black text-center'>
                                        <PacienteDatos pacientes={pacientes} />
                                    </li>
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
                                    <li className='justify-center items-center flex'>
                                        <button className={'rounded-lg  p-1 text-white bg-indigo-500 justify-center items-center flex'}
                                            onClick={
                                                (e) =>{
                                                    handleEdit(e,index)
                                                }
                                            }
                                        >
                                            <IconCheck w={22} h={22}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button className={'rounded-lg p-1 text-white bg-red-500 justify-center items-center flex'}
                                            onClick={
                                                (e) =>{
                                                    handleDelete(e,index)
                                                }
                                            }
                                        >
                                            <IconTrash w={22} h={22}/>
                                        </button>
                                    </li>
                                </ul>
                            </>
                        )
                    })
                )
            }
        </div>
    )
}
