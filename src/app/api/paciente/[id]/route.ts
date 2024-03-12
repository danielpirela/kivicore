import { hashPassword } from '@/utils/hashPassword'
import { prisma } from '@/utils/prisma'
import { NextResponse } from 'next/server'

interface Params {
    params: { id: string }
}

export async function GET(req: Request, { params }: Params) {
    try {
        const paciente = await prisma.paciente.findFirst({
            where: { id: Number(params.id) },
            include: {
                history: true,
                appointment: true,
            },
        })

        if (!paciente)
            return NextResponse.json({ message: 'no se encontro paciente' })
        return NextResponse.json(paciente)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({
                message: err.message,
                status: 500,
            })
        }
    }
}

export async function PUT(req: Request, { params }: Params) {
    try {
        const {
            username,
            dni,
            phone,
            email,
            password,
            name,
            gender,
            status,
            history,
        } = await req.json()
        console.log(params.id, username, dni, phone, email, password)

        const newPassword = await hashPassword(password)

        if (
            !username ||
            (!dni &&
                !phone &&
                !email &&
                !password &&
                !name &&
                !gender &&
                !status &&
                !history)
        ) {
            return NextResponse.json({ message: 'no se enviaron datos' })
        }

        const pacientePut = await prisma.paciente.update({
            where: {
                id: Number(params.id),
            },
            data: {
                username,
                dni,
                phone,
                email,
                password: newPassword,
                name,
                gender,
                status,
                history,
            },
        })

        if (!pacientePut)
            return NextResponse.json({
                error: 'No se puedo actualizar el paciente',
            })

        return NextResponse.json(pacientePut)
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({
                message: err.message,
                status: 500,
            })
        }
    }
}
