'use client'
import { useEffect, useState } from 'react'

interface Props {
    pacientes: Paciente[]
    cita: Cita
}

interface Cita {
    id: string
    day: string
    duration: number
    medicoId: number
    pacienteId: number
    time: Date
    type: string
    status: string
}

interface Paciente {
    id: string
    dni: string
    phone: string
    name: string
    status: string
    appointment: Cita[]
}

export function PacienteDatos({ pacientes, cita }: Props) {
    useEffect(() => {
        const a = () => {
            pacientes?.map((paciente: Paciente) => {
                console.log(paciente.id, cita.id)
                if (paciente.id === cita.id) {
                    console.log(paciente.id, cita.id, 'a')
                }
            })
        }
        a()
    }, [pacientes, cita])

    return (
        <>
            {pacientes &&
                pacientes.map(paciente => {
                    return (
                        <li
                            className='flex flex-col items-center md:flex-row w-auto justify-start sm:flex-row'
                            key={paciente.id}
                        >
                            <p className='text-black text-center'>
                                {paciente.dni}
                            </p>
                            <p className='text-black text-center'>
                                {paciente.name}
                            </p>
                            <p className='text-black text-center'>
                                {paciente.status}
                            </p>
                        </li>
                    )
                })}
        </>
    )
}
