'use client'

import { NavPaciente } from '@/components/NavPaciente'
import PacienteList from '@/components/PacienteList'
import { useAuthStore } from '@/store/authStore'
import type { Paciente } from '@/types'
import { findPacienteById } from '@/utils/findPaciente'
import { useEffect, useState } from 'react'


const page = () => {
    const idPaciente = useAuthStore(state => state.id)
    const setPacienteEmail = useAuthStore(state => state.setPacienteEmail)

    const [paciente,setPaciente] = useState<Paciente>({
        username: null,
        id : null,
        dni: null,
        email: null,
        password:null,
        gender: null,
        phone: null,
        name: null,
        status: null,
        appointment: null,
        history : null
    })

    useEffect(()=>{
        const setState = async () => {
            const res = await findPacienteById(idPaciente)
            if (res.data) {
                console.log(res.data.email)

                setPaciente(res.data)
                setPacienteEmail(res.data.email)
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

