'use client'
import { Cita, Medico, Paciente } from '@/types'
import {Suspense, useCallback, useEffect, useState } from 'react'
import { findManyCitas, findManyMedicos, findManyPacientes } from '@/utils/findPaciente'

import { NavAdmin } from '../../components/NavAdmin'
import { PacienteAdminList } from '@/components/PacienteAdminList'
import { MedicoAdminList } from '@/components/MedicoAdminList'
import { CitasAdminList } from '@/components/CitasAdminList'
import Loading from './loading'

const page = async () => {
    const [pacientes, setPacientes] = useState<Paciente[]>([])
    const [medicos, setMedicos] = useState<Medico[]>([])
    const [citas, setCitas] = useState<Cita[]>([])

    const findData = useCallback(async() => {
        const resPacientes = await findManyPacientes()
        const pacinetesResult = resPacientes.data
        if (pacinetesResult.length > 0) setPacientes(pacinetesResult)

        const resMedicos = await findManyMedicos()
        const medicosResult = resMedicos.data
        if (medicosResult.length > 0) setMedicos(medicosResult)

        const resCitas = await findManyCitas()
        const citasResult = resCitas.data
        if (citasResult.length > 0) setCitas(citasResult)
    },[pacientes, citas, medicos])

    useEffect(() => {
        findData()
    },[])


    return (
        <div className='bg-slate-100'>
            <NavAdmin/>
            <main className='min-w-full min-h-screen bg-slate-100 flex-col gap-10 p-2'>
                <Suspense fallback={<Loading/>}>
                    <section className='py-2 animate-fade-left'>
                        <h1 className='text-3xl font-bold'>Pacientes</h1>
                        <PacienteAdminList pacientes={pacientes}/>
                    </section>
                    <section>
                        <h1 className='text-3xl font-bold'>Medicos</h1>
                        <MedicoAdminList medicos={medicos}/>
                    </section>
                    <section className='py-2'>
                        <h1 className='text-3xl font-bold'>Citas</h1>
                        <CitasAdminList citas={citas} pacientes={pacientes}/>
                    </section>
                </Suspense>
            </main>
        </div>

    )

}

export default page
