'use client'
import { useEffect, useState } from 'react'

interface Props {
    pacientes: Paciente[]
}

interface Cita {
    id : string
    day: string
    duration: number
    medicoId: number
    pacienteId: number
    time: Date
    type: string
    status: string
}

interface Paciente {
id : string
dni: string
phone: string
name: string,
status: string
appointment: Cita[]
}

export function PacienteDatos({pacientes}:Props) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(pacientes.length > 0) {
            setIsLoading(false)
        }
    },[pacientes])
    return (
        <>
            {
                <li>
                    {
                        isLoading && (
                            <p>Cargando...</p>
                        )
                    }
                    {
                        !isLoading && pacientes && (
                            pacientes.map(paciente =>{
                                return (
                                    <p key={paciente.id}>{`${paciente.dni} ${paciente.name} ${paciente.status}`}</p>
                                )
                            })
                        )
                    }
                </li>
            }
        </>
    )
}
