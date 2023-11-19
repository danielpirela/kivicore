import { useState } from 'react'
import { EditModal } from './EditModal'
import { deleteCita } from '@/utils/fetchData'
import { ComponentModal } from './ComponentModal'
import { CreateCita } from './CreateCita'
import { IconCheck, IconClose, IconTrash } from './Icons'

interface Props {
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

const ApptList = ({citas}:Props) => {

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
            <ComponentModal>
                <CreateCita />
            </ComponentModal>

            {
                isEditing && (
                    <>
                        <button className='p-1 bg-indigo-600 absolute right-0 top-0 mt-16 mr-2 rounded-lg z-50' onClick={()=>{setIsEditing(!isEditing)}}>
                            <IconClose w={24} h={24}/>
                        </button>
                        <EditModal cita={citaIndividual}/>
                    </>
                )
            }
            {
                deleteView &&
                <div className='fixed top-0 left-0 overflow-hidden bg-none opacity-95 min-h-screen min-w-full flex justify-center items-start'>
                    <div className='bg-slate-100 rounded-lg p-3 ring-2 ring-red-600 mt-4'>
                        <h1 className=' text-lg'>Estas seguro que quieres borrarla?</h1>
                        <div className='space-x-1 justify-center items-center flex py-2'>

                            <button onClick={async () =>{
                                await deleteCita(citaIndividual.id)
                                setDeleteView(!deleteView)
                                alert('Cita eliminada')
                                window.location.reload()
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
                        console.log(cita)
                        return (
                            <>
                                <ul className='shadow-md flex space-x-2 p-2 rounded-md mt-2 ring-2 ring-indigo-600 w-auto justify-start items-center' key={cita.id}>
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
                                        <button className={'rounded-xl px-1 py-1 text-white bg-blue-500'}
                                            onClick={
                                                (e) =>{
                                                    handleEdit(e,index)
                                                }
                                            }
                                        >
                                            <IconCheck w={24} h={24}/>
                                        </button>
                                    </li>
                                    <li>
                                        <button className={'rounded-lg px-1 py-1 text-white bg-red-500 '}
                                            onClick={
                                                (e) =>{
                                                    handleDelete(e,index)
                                                }
                                            }
                                        >
                                            <IconTrash w={24} h={24}/>
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

export default ApptList
