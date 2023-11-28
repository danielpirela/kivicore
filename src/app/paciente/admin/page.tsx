'use client'
import { setPacienteEmail } from '@/app/redux/features/pacienteSlice'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { NavPaciente } from '@/components/NavPaciente'
import PacienteList from '@/components/PacienteList'
import { findPacienteById } from '@/utils/findPaciente'
import { useEffect, useState } from 'react'


const page = () => {
    const idPaciente = useAppSelector(state => state.pacienteId.id)
    const [paciente,setPaciente] = useState({})
    const dispatch = useAppDispatch()
    useEffect(()=>{
        const setState = async () => {
            const res = await findPacienteById(idPaciente)
            if (res.data) {
                console.log(res.data.email)

                setPaciente(res.data)
                dispatch(setPacienteEmail(res.data.email))
            }
        }
        setState()
    },[])

    return (
        <>
            <NavPaciente/>
            <div className='bg-slate-100 min-h-screen min-w-full gap-2'>
                <PacienteList paciente={paciente} />
            </div>
        </>
    )
}

export default page

