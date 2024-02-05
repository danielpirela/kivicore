'use client'
import { MedicoList } from '@/components/MedicoList'
import { NavMedico } from '@/components/NavMedico'
import { getMedicoById, getPaciente } from '@/utils/fetchData'
import { Suspense, useCallback, useEffect, useState } from 'react'
import Loading from './loading'
import { useAuthStore } from '@/store/authStore'

const page = () => {
    const idMedico = useAuthStore(state => state.medicoId)
    const [medico, setMedico] = useState({})
    const [pacientes, setPacientes] = useState([])

    const resPaciente = async (appt: any) => {
        const tpmPaciente: any = []
        appt.map(async (cita: any) => {
            const res = await getPaciente(cita.pacienteId)
            if (res && !tpmPaciente.includes(res.data.id)) {
                tpmPaciente.push(res.data)
            }
        })
        return tpmPaciente
    }

    useEffect(() => {
        findData()
    }, [])

    const findData = useCallback(async () => {
        const res = await getMedicoById(idMedico)
        if (res.data) {
            setMedico(res.data)
            const pacientesTmp = await resPaciente(res.data.appointment)
            setPacientes(pacientesTmp)
        }
    }, [medico, pacientes])

    return (
        <>
            <NavMedico />
            <Suspense fallback={<Loading />}>
                <div className='bg-slate-100 min-h-screen min-w-full gap-2'>
                    <MedicoList medico={medico} pacientes={pacientes} />
                </div>
            </Suspense>
        </>
    )
}

export default page
