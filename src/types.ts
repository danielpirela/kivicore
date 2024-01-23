export interface Cita {
    id: number | null
    day: string | null
    duration: number | null
    medicoId: number | null
    pacienteId: number | null
    time: string | null
    type: string | null
    status: string | null
    paciente: Paciente | null
    medico: Paciente | null
}

export interface Paciente {
    username: string | null
    id: number | null
    dni: number | null
    email: string | null
    password: string | null
    gender: string | null
    phone: number | null
    name: string | null
    status: string | null
    appointment: Cita[] | null
    history: History[] | null
}

export interface History {
    id: number | null
    createdAt: string | null
    updatedAt: string | null
    content: string | null
    pacienteId: number | null
}

export interface Medico {
    username: string | null
    id: number | null
    dni: number | null
    specialty: string | null
    email: string | null
    password: string | null
    name: string | null
    gender: string | null
    shiftStart: string | null
    shiftEnd: string | null
    numAppt: number | null
    numFreeAppt: number | null
    appointment: Cita[] | null
}
