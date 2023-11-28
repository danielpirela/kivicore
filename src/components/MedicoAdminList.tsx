import { Medico } from '@/types'
import { formateDate } from '@/utils/formatTime'


interface Props {
    medicos: Medico[]
}
export function MedicoAdminList ({medicos} : Props){

    return (
        <div className="relative overflow-auto mt-4 shadow-lg animate-fade-left animate-delay-500">
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
                            Especialidad
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Correo
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Inico de turno
                        </th>
                        <th className="px-6 py-3 tracking-wider">
                            Fin de Turno
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        medicos.map(medico =>{
                            return (
                                <tr className="bg-white border-b hover:bg-slate-200" key={medico.id}>
                                    <th className="px-6 py-4 font-semibold text-gray-900 whitespace-nowrap">
                                        {medico.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {medico.dni}
                                    </td>
                                    <td className="px-6 py-4">
                                        {medico.specialty}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {medico.email}
                                    </td>

                                    <td className='px-6 py-4'>
                                        {formateDate(medico.shiftStart)}
                                    </td>

                                    <td className='px-6 py-4'>
                                        {formateDate(medico.shiftEnd)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

