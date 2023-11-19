'use client'
import { useAppSelector } from '@/app/redux/hooks'
import { MedicoList } from '@/components/MedicoList'
import {NavMedico} from '@/components/NavMedico'
import { getMedicoById, getPaciente } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const page = () => {
    const idMedico = useAppSelector((state) => state.medicoId.id)
    const [medico,setMedico] = useState({})
    const [pacientes,setPacientes] = useState([])

    const resPaciente = async (appt : any) => {
        const tpmPaciente : any = []
        appt.map(async (cita:any) => {
            const res = await getPaciente(cita.pacienteId)
            if (res && !tpmPaciente.includes(res.data.id)){
                tpmPaciente.push(res.data)
            }
        })
        return tpmPaciente
    }

    useEffect(()=>{
        const setState = async () => {
            const res = await getMedicoById(idMedico)
            if (res.data) {
                setMedico(res.data)
                const pacientesTmp = await resPaciente(res.data.appointment)
                setPacientes(pacientesTmp)
            }
        }
        setState()
    },[])


    /* const [citas,setCitas] = useState([])
    const [pacientes,setPacientes] = useState([])
    const [medico,setMedico] = useState({})


    const resMedico = async (id:string) =>{
        const res = await getMedicoById(id)
        if(res) {
            return res.data
        }
    }

    const resPaciente = async (appt : any) => {
        const tpmPaciente : any = []
        appt.map(async (cita:any) => {
            const res = await getPaciente(cita.pacienteId)
            if (res && !tpmPaciente.includes(res.data.id)){
                tpmPaciente.push(res.data)
            }
        })
        return tpmPaciente
    }

    useEffect(()=>{
        const setStates = async () =>{
            const appt = await resMedico(idMedico)
            setMedico(appt)
            setCitas(appt.appointment)
            const pacien = await resPaciente(appt?.appointment)
            setPacientes(pacien)

            console.log(citas,pacientes)

        }
        setStates()
    },[]) */

    return (
        <>
            <NavMedico/>
            <div className='bg-slate-100 min-h-screen min-w-full gap-2'>
                <MedicoList medico={medico} pacientes={pacientes} />
            </div>
        </>
    )
}

export default page
