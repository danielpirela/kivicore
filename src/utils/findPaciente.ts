import { prisma } from '@/utils/prisma'
import axios from 'axios'

export async function findPaciente(email: string) {
    try {
        const paciente = await prisma.paciente.findFirst({
            where: { email: email },
        })
        if (!paciente) {
            throw new Error('Paciente no encontrado')
        }
        return paciente
    } catch (err) {
        if (err instanceof Error) {
            throw new Error('Ocurrio un error al recibir los datos')
        }
    }
}

export async function findPacienteById(id: string) {
    const res = await axios.get(`/api/paciente/${id}`)
    return res
}

export async function findManyPacientes() {
    const res = await axios.get('/api/paciente')
    return res
}

export async function findManyMedicos() {
    const res = await axios.get('/api/medico')
    return res
}

export async function findManyCitas() {
    const res = await axios.get('/api/cita')
    console.log(res)
    return res
}
