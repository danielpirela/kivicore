import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'
import { verifyTime } from '@/utils/verifyAppt'


export async function POST (req: Request) {
    try {
        const {
            day,
            time,
            type,
            duration,
            pacienteId,
            medicoId
        } = await req.json()

        const horaOcupada = await verifyTime(day,medicoId,duration)

        if (horaOcupada.length !== 0) return NextResponse.json({message: 'hora Ocupada'})

        const cita = await prisma.appointment.create({
            data: {
                day,
                time,
                type,
                duration,
                pacienteId,
                medicoId
            }
        })

        const paciente = await prisma.appointment.update({
            where: {
                id: Number(cita.id),
            },
            data:{
                paciente :{
                    connect: {
                        id: pacienteId
                    }
                }
            }
        })

        const medico = await prisma.appointment.update({
            where: {
                id: Number(cita.id),
            },
            data:{
                medico :{
                    connect: {
                        id: medicoId
                    }
                }
            }
        })

        if (!cita || !medico || !paciente) return NextResponse.json({error: 'Invalid data', status: 404})

        return NextResponse.json({cita})
    }
    catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({error: err.message, status: 500})
        }
    }
}


export async function GET(){
    try{
        const citas = await prisma.appointment.findMany({
            include: {
                paciente: true,
                medico: true
            }
        })

        if(!citas) return NextResponse.json({message: 'no se encontraron citas'})

        return NextResponse.json({citas})

    }catch(err){
        if(err instanceof Error){
            return NextResponse.json(err,{status: 500})
        }
    }
}
