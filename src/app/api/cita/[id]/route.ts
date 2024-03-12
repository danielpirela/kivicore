import { NextResponse } from 'next/server'
import { prisma } from '@/utils/prisma'

interface Params {
    params: { id: string }
}

export async function GET(req: Request, { params }: Params) {
    try {
        const cita = await prisma.appointment.findFirst({
            where: {
                id: Number(params.id),
            },

            include: {
                paciente: true,
                medico: true,
            },
        })

        if (!cita) return NextResponse.json({ message: 'no se encontro cita' })

        return NextResponse.json(cita)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(err, { status: 500 })
        }
    }
}

export async function PUT(req: Request, { params }: Params) {
    try {
        const { day, time, type, duration, status, pacienteId, medicoId } =
            await req.json()

        const cita = await prisma.appointment.update({
            where: {
                id: Number(params.id),
            },
            data: {
                day,
                time,
                type,
                duration,
                status,
                pacienteId,
                medicoId,
            },
        })

        if (!cita)
            return NextResponse.json({
                message: 'No se puedo actualizar la cita',
            })

        return NextResponse.json(cita)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({
                message: err.message,
                status: 500,
            })
        }
    }
}

export async function DELETE(req: Request, { params }: Params) {
    try {
        const cita = await prisma.appointment.delete({
            where: { id: Number(params.id) },
        })
        return NextResponse.json(cita)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({ error: err.message, status: 500 })
        }
    }
}
