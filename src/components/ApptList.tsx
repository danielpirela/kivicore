import { useState } from 'react'
import { EditModal } from './EditModal'
import { deleteCita } from '@/utils/fetchData'
import { ComponentModal } from './ComponentModal'
import { CreateCita } from './CreateCita'
import { IconCheck, IconClose, IconTrash } from './Icons'
import { formateDate } from '@/utils/formatTime'
import { Cita } from '@/types'
interface Props {
    citas: Cita[] | null
}


const ApptList = ({citas}:Props) => {

    const [isEditing, setIsEditing] = useState(false)

    const [citaIndividual,setCitaIndividual] = useState<Cita>({
        id : null,
        day: null,
        duration: null,
        medicoId: null,
        pacienteId: null,
        time: null,
        type: null,
        status: null,
        paciente : null,
        medico: null
    })
    const [deleteView, setDeleteView] = useState(false)

    const handleEdit = (e:React.MouseEvent<HTMLElement> , index: number) =>{
        e.preventDefault()
        if(citas) setCitaIndividual(citas[index])
        setIsEditing(!isEditing)
    }
    const handleDelete = (e:React.MouseEvent<HTMLElement> , index: number) =>{
        e.preventDefault()
        if(citas) setCitaIndividual(citas[index])
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
                    <div className='bg-white rounded-lg p-3 ring-2 ring-red-600 mt-4 shadow-xl animate-fade-down delay-150'>
                        <h1 className=' text-lg'>Estas seguro que quieres borrarla?</h1>
                        <div className='space-x-1 justify-center items-center flex py-2'>

                            <button onClick={async () =>{
                                if (citaIndividual) {
                                    await deleteCita(citaIndividual?.id)
                                    setDeleteView(!deleteView)
                                    alert('Cita eliminada')
                                    window.location.reload()
                                }
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
                            <div key={cita.id} className='gap-4 flex m-2 max-[639px]:justify-center max-[639px]:items-center animate-fade-left animate-delay-150'>
                                <ul className='shadow-md flex flex-col gap-2 p-2 items-center md:flex-row rounded-md ring-2 ring-indigo-600 w-auto justify-start sm:flex-row'>
                                    <li  className='text-black text-center w-auto'>
                                        <p>{formateDate(cita.day)}</p>
                                    </li>
                                    <li className='text-black text-center w-auto'>
                                        <p>{`${cita.duration} mins`}</p>
                                    </li>
                                    <li className='text-black text-center w-auto'>
                                        <p>{formateDate(String(cita.time))}</p>
                                    </li>
                                    <li className='text-black text-center w-auto'>
                                        <p>{cita.type}</p>
                                    </li>
                                    <li className='text-black text-center w-auto'>
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
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default ApptList
