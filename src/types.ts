export interface Cita {
    id : number;
    day: string
    duration: number
    medicoId: number
    pacienteId: number
    time: string
    type: string
    status: string
    paciente : Paciente
    medico: Paciente
}

export interface Paciente {
username: string
id : number
dni: number
email: string
password: string
gender: string
phone: number
name: string,
status: string
appointment: Cita[]
history : History[]
}

export interface History {
    id: number
    createdAt: string
    updatedAt: string
    content : string
    pacienteId: number
}

export interface  Medico {
    username: string
    id : number
    dni : number
    specialty: string
    email : string
    password : string
    name : string
    gender : string
    shiftStart : string
    shiftEnd : string
    numAppt : number
    numFreeAppt : number
    appointment : Cita[]
}
