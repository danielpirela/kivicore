import moment from 'moment'
import { prisma } from '@/utils/prisma'

export async function verifyTime(
    startDate: string,
    medico: string,
    duration: number,
) {
    const horaFinal = moment(startDate).add(Number(duration), 'm').toISOString()

    const horaOcupada = await prisma.appointment.findMany({
        where: {
            day: {
                gte: new Date(startDate),
                lte: new Date(horaFinal),
            },
            medicoId: {
                equals: Number(medico),
            },
        },
    })

    return horaOcupada
}
