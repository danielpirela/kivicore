import axios from 'axios'
interface Cita {
    id : number
    day: string
    duration: number
    medicoId: number
    pacienteId: number
    time: Date
    type: string
    status: string
}
export async function getPaciente(id: string){
    const res = await axios.get(`/api/paciente/${id}`)
    return res
}

export async function getMedicoById(id: string){
    const medico = await axios.get(`/api/medico/${id}`)
    return medico
}

export async function editHistory(paciente: any, content: string){
    const id = paciente.history[0].id
    const contentNew = paciente.history[0].content + content
    console.log(id, contentNew)

    const res = await axios.put(`/api/historia/${id}`,{
        content: contentNew
    })
    return res
}

export async function editAppointment(cita: any){
    const id = cita.id
    const res = await axios.put(`/api/cita/${id}`,{
        day: cita.day,
        time: cita.time,
        type: cita.type,
        duration: cita.duration,
        status: 'Completada',
        pacienteId: cita.pacienteId,
        medicoId: cita.medicoId
    })
    return res
}


export async function editAppointmentForPacient(cita:Cita, dateTime : string ,duration: number){
    const res = await axios.put(`/api/cita/${cita.id}`,{
        day: dateTime,
        time: dateTime,
        type: cita.type,
        duration: Number(duration),
        status: cita.status,
        pacienteId: cita.pacienteId,
        medicoId: cita.medicoId
    })
    return res
}

export async function deleteCita(id: number){
    const res = await axios.delete(`/api/cita/${id}`)
    return res
}


export async function getMedico(){
    const res = await axios.get('/api/medico')
    return res
}


export async function createAppointment(duration: number, dateConverter: string, medico : string, pacienteId: string,email: string){
    const res = await axios.post('/api/cita/',{
        day: dateConverter,
        time: dateConverter,
        type: 'paga',
        duration: Number(duration),
        status: 'Programada',
        pacienteId:Number(pacienteId),
        medicoId: Number(medico),
        email: email
    })
    return res
}

export async function  createMedico(name: string, dni: number,email: string,password: string,specialty: string,shiftStart:string,shiftEnd: string,numAppt:number,numFreeAppt:number){

    const res = await axios.post('/api/medico', {
        name: name,
        dni: Number(dni),
        email: email,
        password: password,
        specialty: specialty,
        shiftStart: shiftStart,
        shiftEnd: shiftEnd,
        numAppt: Number(numAppt),
        numFreeAppt: Number(numFreeAppt)
    })
    return res
}
