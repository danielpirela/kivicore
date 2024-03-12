import { Cita, Paciente } from '@/types'
import { formateDate } from '@/utils/formatTime'
import { IconCheck, IconClose, IconEdit, IconTrash } from './Icons'
import { useState } from 'react'
import { deleteCita } from '@/utils/fetchData'
import { EditModal2 } from './EditModal'
import { ModalEditMedicoCita } from './ModalEditMedicoCita'
import { EditFormCita } from './EditFormCita'

interface Props {
    citas: Cita[]
    pacientes: Paciente[]
}
export function CitasAdminList({ citas, pacientes }: Props) {
    const [isEditing, setIsEditing] = useState(false)
    const [isChecking, setIsChecking] = useState(false)
    const [citaIndividual, setCitaIndividual] = useState({})
    const [deleteView, setDeleteView] = useState(false)

    const handleDelete = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault()
        setCitaIndividual(citas[index])
        setDeleteView(!deleteView)
    }

    const handleEdit = (e: React.MouseEvent<HTMLElement>, index: number) => {
        e.preventDefault()
        setCitaIndividual(citas[index])
        setIsEditing(!isEditing)
    }

    const handleChecking = (
        e: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        e.preventDefault()
        setCitaIndividual(citas[index])
        setIsChecking(!isChecking)
    }

    return (
        <div className=' relative overflow-auto mt-4 shadow-lg animate-fade-left h-auto'>
            {deleteView && (
                <div className='absolute top-0 left-0 overflow-hidden bg-none opacity-95 min-h-screen min-w-full flex justify-center items-start'>
                    <div className='bg-white rounded-lg p-2 ring-2 ring-red-600 mt-4 shadow-2xl animate-fade-down delay-150'>
                        <div className='space-x-1 justify-center items-center flex py-1 px-2'>
                            <button
                                onClick={async () => {
                                    await deleteCita(citaIndividual.id)
                                    setDeleteView(!deleteView)
                                    alert('Cita eliminada')
                                    window.location.reload()
                                }}
                                className='px-2 py-2 bg-indigo-600 text-center rounded-lg text-white'
                            >
                                <IconTrash w={24} h={24} />
                            </button>
                            <button
                                onClick={() => {
                                    setDeleteView(!deleteView)
                                }}
                                className='p-2 bg-red-600 text-center text-white rounded-lg'
                            >
                                <IconClose w={24} h={24} />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isEditing && (
                <>
                    <button
                        className='p-1 bg-indigo-600 fixed right-0 top-0 mt-2 mr-2 rounded-lg z-50'
                        onClick={() => {
                            setIsEditing(!isEditing)
                        }}
                    >
                        <IconClose w={24} h={24} />
                    </button>
                    <div className='absolute top-0 left-0 bg-none min-w-full min-h-screen flex justify-center items-start overflow-hidden z-40'>
                        <EditModal2 cita={citaIndividual} />
                    </div>
                </>
            )}

            {isChecking && (
                <>
                    <button
                        className='absolute right-0 top-0 mr-4 mt-20 text-indigo-600 z-20 text-2xl bg-indigo-700 p-1 rounded-lg '
                        onClick={() => {
                            setIsChecking(!isChecking)
                        }}
                    >
                        <IconClose w={24} h={24} />
                    </button>
                    <ModalEditMedicoCita>
                        <EditFormCita
                            cita={citaIndividual}
                            pacientes={pacientes}
                        />
                    </ModalEditMedicoCita>
                </>
            )}

            <table className='w-full text-sm text-left rtl:text-right text-gray-800 table-auto'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                    <tr>
                        <th className='px-6 py-3 tracking-wider'>Id</th>
                        <th className='px-6 py-3 tracking-wider'>Dia</th>
                        <th className='px-6 py-3 tracking-wider'>Duracion</th>
                        <th className='px-6 py-3 tracking-wider'>Medico</th>
                        <th className='px-6 py-3 tracking-wider'>Paciente</th>
                        <th className='px-6 py-3 tracking-wider'>Tipo</th>
                        <th className='px-6 py-3 tracking-wider'>Estado</th>
                        <th className='px-6 py-3 tracking-wider'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {citas.map((cita, index) => {
                        return (
                            <tr
                                className='bg-white border-b hover:bg-slate-200'
                                key={cita.id}
                            >
                                <th className='px-6 py-4 font-semibold text-gray-900 whitespace-nowrap'>
                                    {cita.id}
                                </th>
                                <td className='px-6 py-4'>
                                    {formateDate(cita.day)}
                                </td>
                                <td className='px-6 py-4'>
                                    {cita.duration} min
                                </td>
                                <td className='px-6 py-4'>{cita.medico.dni}</td>
                                <td className='px-6 py-4'>
                                    {cita.paciente.dni}
                                </td>
                                <td className='px-6 py-4'>{cita.type}</td>
                                <td className='px-4 py-3 flex justify-start items-center'>
                                    <p
                                        className={`rounded-lg px-2 py-1 text-center
                                    ${
                            cita.status !== 'Programada'
                                ? 'bg-green-500'
                                : 'bg-orange-500'
                            }`}
                                    >
                                        {cita.status}
                                    </p>
                                </td>
                                <td className='px-5 py-3 flex-col justify-start items-center'>
                                    <button
                                        className='bg-indigo-500 rounded-md p-1 mr-2'
                                        onClick={e => {
                                            handleChecking(e, index)
                                        }}
                                    >
                                        <IconCheck w={24} h={24} />
                                    </button>

                                    <button
                                        className='bg-indigo-500 rounded-md p-1 mr-2'
                                        onClick={e => {
                                            handleEdit(e, index)
                                        }}
                                    >
                                        <IconEdit w={24} h={24} />
                                    </button>

                                    <button
                                        className='bg-red-500 rounded-md p-1'
                                        onClick={e => {
                                            handleDelete(e, index)
                                        }}
                                    >
                                        <IconTrash w={24} h={24} />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
