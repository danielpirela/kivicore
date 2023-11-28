import { History, Paciente } from '@/types'
import { useState } from 'react'

interface Props {
    pacientes: Paciente[]
}
export function PacienteAdminList ({pacientes} : Props){

    const [isView, setIsView] = useState(false)
    const [pacienteI, setPacienteI] = useState<Paciente>({})
    const [history, setHistory] = useState<History>({})

    const handleView = (e:any, index: number) =>{
        e.preventDefault()
        setIsView(!isView)
        setPacienteI(pacientes[index])

        if(pacienteI.history){
            pacienteI.history.map((historia)=>{
                setHistory(historia)
            })
        }
    }

    return (
        <div className="relative overflow-auto mt-4 shadow-lg animate-delay-500">
            <table className="w-full text-sm text-left rtl:text-right text-gray-800 table-auto">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th  className="px-6 py-3 tracking-wider">
                            Nombre
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Dni
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Telefono
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Genero
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Correo
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Estado
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pacientes.map((paciente, index) =>{
                            return (
                                <tr className="bg-white border-b hover:bg-slate-200" key={paciente.id}>
                                    <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap"
                                        onClick={(e)=>{
                                            handleView(e,index)}
                                        }
                                    >
                                        {paciente.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {paciente.dni}
                                    </td>
                                    <td className="px-6 py-4">
                                        {paciente.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        {paciente.gender}
                                    </td>
                                    <td className="px-6 py-4">
                                        {paciente.email}
                                    </td>
                                    <td className='px-4 py-3 flex justify-start items-center'>
                                        <p className={`px-2 py-1 text-center rounded-lg ${paciente.status === 'Asegurado'? 'bg-green-500' : 'bg-red-500' }`}>
                                            {paciente.status}
                                        </p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
                isView && (
                    <div className='bg-white border-b hover:bg-slate-200 flex justify-start items-center h-auto min-w-full z-10 gap-10 px-6 py-3 animate-fade-down animate-delay-150'>
                        <h1 className='font-semibold text-lg    '>Historia</h1>
                        <p className='font-light'>{history?.content}</p>
                    </div>
                )
            }
        </div>

    )
}

